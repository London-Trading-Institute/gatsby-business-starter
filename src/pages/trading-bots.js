import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

// PREVIEW (placeholder) — the Trading Bots category Andy described for the funnels.
// Not on the live site yet. Real equity curves, copy and extra bots to be added.
const bots = [
  { slug: 'alpha', name: 'ALPHA', tagline: 'Rule-based EA for MT4/MT5. Start a 7-day free trial.', status: 'available' },
  { slug: 'gold-pyramid', name: 'Gold Pyramid', tagline: 'Systematic strategy for gold (XAU/USD).', status: 'coming-soon' },
]

const wrap = { maxWidth: '1080px', margin: '0 auto', padding: '0 24px', width: '100%' }

const eyebrow = { fontSize: '13px', letterSpacing: '2px', color: '#FFAB00', fontWeight: 700, marginBottom: '12px' }

const BotCard = ({ bot }) => (
  <Link
    to={`/trading-bots/${bot.slug}`}
    style={{ textDecoration: 'none', color: 'inherit', flex: '1 1 320px', display: 'flex' }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid #E3E8F2',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 6px 20px rgba(15,28,56,0.06)',
      }}
    >
      <div
        style={{
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F7F9FF 0%, #EEF2FB 100%)',
          borderBottom: '1px solid #EEF1F8',
          color: '#9AA4B8',
          fontSize: '13px',
          textAlign: 'center',
          padding: '16px',
        }}
      >
        Equity curve — image to be added
      </div>
      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#0F1C38' }}>{bot.name}</div>
          {bot.status === 'coming-soon' && (
            <span style={{ fontSize: '11px', letterSpacing: '0.5px', background: '#EEF1F8', color: '#4B586A', padding: '4px 9px', borderRadius: '20px' }}>
              COMING SOON
            </span>
          )}
        </div>
        <div style={{ fontSize: '14px', color: '#4B586A', lineHeight: 1.6, flex: 1 }}>{bot.tagline}</div>
        <div style={{ color: '#FFAB00', fontWeight: 700, fontSize: '15px', marginTop: '18px' }}>Learn more →</div>
      </div>
    </div>
  </Link>
)

const TradingBotsPage = () => (
  <Layout
    title="Trading Bots (EAs)"
    description="London Trading Institute's automated trading strategies (Expert Advisors) for MetaTrader 4 and 5 — trial them on your own account."
  >
    {/* Hero */}
    <div style={{ padding: '64px 0 40px' }}>
      <div style={wrap}>
        <div style={eyebrow}>AUTOMATED TRADING</div>
        <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#0F1C38', margin: '0 0 16px' }}>Trading Bots</h1>
        <p style={{ fontSize: '18px', color: '#4B586A', lineHeight: 1.6, maxWidth: '620px', margin: 0 }}>
          Our Expert Advisors (EAs) run clearly defined, rule-based strategies automatically on your MT4/MT5 account.
          Explore each bot and start a free trial.
        </p>
      </div>
    </div>

    {/* Bots grid */}
    <div style={{ background: '#F7F9FF', padding: '48px 0 80px' }}>
      <div style={wrap}>
        <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#0F1C38', margin: '0 0 6px' }}>Our Bots</h2>
        <div style={{ width: '54px', height: '4px', background: '#FFAB00', borderRadius: '2px', marginBottom: '32px' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch' }}>
          {bots.map((b) => <BotCard key={b.slug} bot={b} />)}
        </div>
      </div>
    </div>
  </Layout>
)

export default TradingBotsPage
