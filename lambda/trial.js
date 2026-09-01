// Netlify serverless function: proxies free-trial signups to the LTG Licence Manager.
//
// The browser form POSTs here; this function adds the secret x-api-key header and
// calls the licence manager's /trial endpoint SERVER-SIDE, so the key is never
// exposed to the browser. See TRIAL_WEBHOOK_INTEGRATION.md for the full spec.
//
// Required env var:  LICENCE_TRIAL_SECRET   (the x-api-key value)
// Optional env var:  LICENCE_TRIAL_URL      (override endpoint, e.g. switch to https:// once live)

const axios = require('axios')

const DEFAULT_ENDPOINT =
  'http://licence.manager.londontradinginstitute.londontradinggroup.com/trial'

const jsonResponse = (statusCode, obj) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(obj),
})

module.exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { status: 'error', message: 'Method not allowed' })
  }

  const secret = process.env.LICENCE_TRIAL_SECRET
  if (!secret) {
    console.error('LICENCE_TRIAL_SECRET is not set')
    return jsonResponse(500, { status: 'error', message: 'Server not configured' })
  }

  let data
  try {
    data = JSON.parse(event.body || '{}')
  } catch (e) {
    return jsonResponse(400, { status: 'error', message: 'Invalid request body' })
  }

  const name = (data.name || '').trim()
  const email = (data.email || '').trim()
  const phone = (data.phone || '').trim()
  const product = (data.product || '').trim()
  const trialDays = (data.trial_days ? String(data.trial_days) : '').trim()

  if (!name || !email || !product) {
    return jsonResponse(400, {
      status: 'error',
      message: 'Please enter your name and email.',
    })
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
        // licence manager defaults to 14 if omitted; we pass what the form sent
        ...(trialDays ? { trial_days: trialDays } : {}),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': secret,
        },
        timeout: 15000,
        // handle every status ourselves rather than throwing on 4xx/5xx
        validateStatus: () => true,
      }
    )

    const body = resp.data || {}

    if (resp.status === 200 && (body.status === 'created' || body.status === 'resent')) {
      return jsonResponse(200, {
        status: body.status,
        message: 'Check your email to start your trial.',
      })
    }

    // Known upstream errors — log details server-side, return a safe message.
    console.error('Licence manager returned', resp.status, JSON.stringify(body))
    return jsonResponse(resp.status >= 400 && resp.status < 600 ? resp.status : 502, {
      status: 'error',
      message:
        body && body.message
          ? body.message
          : 'We could not start your trial right now. Please try again.',
    })
  } catch (err) {
    console.error('Trial request failed:', err.message)
    return jsonResponse(502, {
      status: 'error',
      message: 'We could not start your trial right now. Please try again shortly.',
    })
  }
}
