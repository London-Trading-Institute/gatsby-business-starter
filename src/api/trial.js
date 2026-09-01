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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }

  const secret = process.env.LICENCE_TRIAL_SECRET
  if (!secret) {
    console.error('LICENCE_TRIAL_SECRET is not set')
    return res.status(500).json({ status: 'error', message: 'Server not configured' })
  }

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
