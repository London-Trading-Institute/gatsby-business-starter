import React from 'react'
import BotPage from '../../components/BotPage'

// PREVIEW (placeholder). ALPHA is wired to the licence manager + GHL, but real
// description, equity curve, walkthrough video and Vantage setup steps to come.
const Alpha = () => (
  <BotPage
    name="ALPHA"
    tagline="An automated Expert Advisor for MT4/MT5 that runs a rule-based strategy for you."
    description="ALPHA executes a clearly defined, rule-based strategy automatically on your MetaTrader 4 or 5 account, so qualifying trades are taken consistently without you watching every setup. [Placeholder copy — Andy to provide the full description of how the strategy works and what to expect.]"
    bullets={[
      'Runs on MT4/MT5 — designed for the Vantage broker setup',
      'Rule-based execution — no discretionary guesswork',
      '7-day free trial — download + activation link emailed automatically',
      '[Placeholder] Add key parameters / recommended risk settings here',
    ]}
    productCode="alpha"
    status="available"
  />
)

export default Alpha
