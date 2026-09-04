import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { Header, Underline } from '../globalStyles'

// PREVIEW (placeholder) — the Trading Bots category Andy described for the funnels.
// Not on the live site yet. Real equity curves, copy and extra bots to be added.
const bots = [
  { slug: 'alpha', name: 'ALPHA', tagline: 'Rule-based EA for MT4/MT5. Start a 7-day free trial.', status: 'available' },
  { slug: 'gold-pyramid', name: 'Gold Pyramid', tagline: 'Systematic strategy for gold (XAU/USD).', status: 'coming-soon' },
]

const BotCard = ({ bot }) => (
  <Link
    to={`/trading-bots/${bot.slug}`}
    style={{ textDecoration: 'none', color: 'inherit', flex: '1 1 300px', maxWidth: '360px' }}
  >
    <div style={{ border: '1px solid #E3E8F2', borderRadius: '10px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 10px rgba(15,28,56,0.05)' }}>
      <div style={{ height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F7F9FF', borderBottom: '1px solid #EEF1F8', color: '#8790A5', fontSize: '14px', textAlign: 'center', padding: '16px' }}>
        Equity curve — image to be added
      </div>
      <div style={{ padding: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#0F1C38' }}>{bot.name}</div>
          {bot.status === 'coming-soon' && (
            <span style={{ fontSize: '12px', background: '#EEF1F8', color: '#4B586A', padding: '3px 8px', borderRadius: '6px' }}>Coming soon</span>
          )}
        </div>
        <div style={{ fontSize: '14px', color: '#4B586A', margin: '10px 0 16px' }}>{bot.tagline}</div>
        <div style={{ color: '#FFAB00', fontWeight: 600, fontSize: '15px' }}>Learn more →</div>
      </div>
    </div>
  </Link>
)

const TradingBotsPage = () => (
  <Layout
    title="Trading Bots (EAs)"
    description="London Trading Institute's automated trading strategies (Expert Advisors) for MetaTrader 4 and 5 — trial them on your own account."
  >
    <div style={{ padding: '50px 7% 10px' }}>
      <div style={{ fontSize: '13px', letterSpacing: '2px', color: '#FFAB00', marginBottom: '10px' }}>AUTOMATED TRADING</div>
      <div style={{ fontSize: '38px', fontWeight: 700, color: '#0F1C38', marginBottom: '12px' }}>Trading Bots</div>
      <div style={{ fontSize: '18px', color: '#4B586A', maxWidth: '640px' }}>
        Our Expert Advisors (EAs) run clearly defined, rule-based strategies automatically on your MT4/MT5 account.
        Explore each bot and start a free trial.
      </div>
    </div>
    <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
      <div><div>Our Bots</div><Underline /></div>
    </Header>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '24px 7% 80px' }}>
      {bots.map((b) => <BotCard key={b.slug} bot={b} />)}
    </div>
  </Layout>
)

export default TradingBotsPage
