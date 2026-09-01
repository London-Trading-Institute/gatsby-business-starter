// Gatsby Function: proxies free-trial signups to the LTG Licence Manager.
//
// Served at /api/trial in BOTH `gatsby develop` (locally) and production, so the
// browser never sees the secret x-api-key. See TRIAL_WEBHOOK_INTEGRATION.md.
//
// Env vars (put in .env.development for local dev; set in the host for production):
//   LICENCE_TRIAL_SECRET  (required) - the x-api-key value
//   LICENCE_TRIAL_URL     (optional) - override endpoint, e.g. switch to https:// once live

import axios from 'axios'

const DEFAULT_ENDPOINT =
  'http://licence.manager.londontradinginstitute.londontradinggroup.com/trial'

// Best-effort push of the lead into GoHighLevel via an Inbound Webhook.
// Set GHL_TRIAL_WEBHOOK_URL to the workflow's inbound-webhook URL to enable it.
// Never throws — a GHL failure must not block trial-licence creation.
async function addToGhl({ name, email, phone, product, tags }) {
  const url = process.env.GHL_TRIAL_WEBHOOK_URL
  if (!url) return // not configured yet — skip silently
  try {
    await axios.post(
      url,
      {
        name,
        first_name: name,
        email,
        phone,
        product,
        tags, // e.g. ["free-trial", "alpha-trial"]
        source: 'website-free-trial',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: 8000,
        validateStatus: () => true,
      }
    )
  } catch (err) {
    console.error('GHL webhook failed (non-fatal):', err.message)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }

  // Prefer a host env var (set LICENCE_TRIAL_SECRET to override). Falls back to an
  // obfuscated embedded value so the trial works without host env-var access.
  // NOTE: base64 is obfuscation, NOT encryption — anyone with repo access can
  // decode it. Accepted trade-off for a low-sensitivity trial key; rotate it and
  // move to a real env var once host access is available. Server-side only —
  // this is never shipped to the browser.
  const secret =
    process.env.LICENCE_TRIAL_SECRET ||
    Buffer.from(
      'NjlkM2VhYTFhMmI1ZjQwYTQwMGVkMzY5NDc3NjU1Y2I5YjFlN2ZlZmEwNmU2ODU4',
      'base64'
    ).toString('utf8')

  const data = req.body || {}
  const name = (data.name || '').trim()
  const email = (data.email || '').trim()
  const phone = (data.phone || '').trim()
  const product = (data.product || '').trim()
  const trialDays = data.trial_days ? String(data.trial_days).trim() : ''

  if (!name || !email || !product) {
    return res.status(400).json({ status: 'error', message: 'Please enter your name and email.' })
  }

  const endpoint = process.env.LICENCE_TRIAL_URL || DEFAULT_ENDPOINT

  try {
    const resp = await axios.post(
      endpoint,
      {
        name,
        email,
        phone,
        product,
        ...(trialDays ? { trial_days: trialDays } : {}),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': secret,
        },
        timeout: 15000,
        validateStatus: () => true, // we handle every status ourselves
      }
    )

    const body = resp.data || {}

    if (resp.status === 200 && (body.status === 'created' || body.status === 'resent')) {
      // Also add the lead to GoHighLevel with tags (best-effort, non-blocking).
      await addToGhl({
        name,
        email,
        phone,
        product,
        tags: ['free-trial', `${product}-trial`],
      })
      return res.status(200).json({
        status: body.status,
        message: 'Check your email to start your trial.',
      })
    }

    console.error('Licence manager returned', resp.status, JSON.stringify(body))
    return res
      .status(resp.status >= 400 && resp.status < 600 ? resp.status : 502)
      .json({
        status: 'error',
        message: body && body.message
          ? body.message
          : 'We could not start your trial right now. Please try again.',
      })
  } catch (err) {
    console.error('Trial request failed:', err.message)
    return res.status(502).json({
      status: 'error',
      message: 'We could not start your trial right now. Please try again shortly.',
    })
  }
}
