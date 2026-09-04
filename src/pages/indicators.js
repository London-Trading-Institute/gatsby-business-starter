import React, { useState } from 'react'
import { Layout, Testimonial, Booking, IntroCardIndicatorPage } from '../components'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from '../components/ContactForm/ContactForm.elements'
import { Button } from '../components/Courses/Courses.elements'
import { Card, Header, Underline, Modal, ModalContainer, RDiv } from '../globalStyles'
import Content from './content/home.json'
import axios from 'axios'
import { Banner } from '../components/About/About.element'
import alpha from '../img/algorithms.jpg'
import dtr from '../img/indicators/dtr.png'
import trendLines from '../img/indicators/trend-lines.png'
import autoFib from '../img/indicators/auto-fibonacci.png'
import supplyDemand from '../img/indicators/supply-demand.png'
import positionRisk from '../img/indicators/position-risk-manager.png'

// --- Indicators free trial (existing flow: Zapier lead capture) ---
const IndicatorTrialModal = ({ show, onClose }) => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [mobile, setMobile] = useState()

  const submitLead = () => {
    axios.post(
      `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?course=${'none'}&email=${email}&name=${name}&mobile=${mobile}`,
      email,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
    )
    axios.post(
      `https://hooks.zapier.com/hooks/catch/2431386/oznxxo0?email=${email}&name=${name}&mobile=${mobile}`,
      email,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
    )
    onClose()
  }

  if (!show) return null
  return (
    <ModalContainer>
      <Modal>
        <span style={{ textAlign: 'right', margin: '15px', fontSize: '20px', cursor: 'pointer', color: 'grey' }}
          onClick={onClose}>&#x2715;</span>
        <FormContainer>
          <ContactLabel>Get Your Free Indicator Trial</ContactLabel>
          <InputContainer>
            <Label>Name</Label>
            <InputField onChange={(e) => setName(e.target.value)} id="name" />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <InputField onChange={(e) => setEmail(e.target.value)} id="email" />
          </InputContainer>
          <InputContainer>
            <Label>Mobile</Label>
            <InputField type="number" onChange={(e) => setMobile(e.target.value)} id="mobile" />
          </InputContainer>
          <Button style={{ fontSize: '30px' }} onClick={submitLead}>Send Indicators</Button>
        </FormContainer>
      </Modal>
    </ModalContainer>
  )
}

// --- ALPHA EA free trial (server-side -> LTG Licence Manager) ---
// NOTE: ALPHA is intentionally NOT rendered on the page yet. It's designed for a
// specific broker (Vantage) and needs setup instructions + email + video before
// going public. Component kept here so it can be re-enabled quickly. See the
// commented-out "Expert Advisors" section below.
const AlphaTrialModal = ({ show, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = async () => {
    if (status === 'loading') return
    if (!form.name || !form.email) {
      setStatus('error')
      setMessage('Please enter your name and email.')
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: 'alpha',
          trial_days: '7',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && (data.status === 'created' || data.status === 'resent')) {
        setStatus('success')
        setMessage(data.message || 'Check your email to start your trial.')
      } else {
        setStatus('error')
        setMessage(data.message || 'We could not start your trial right now. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again shortly.')
    }
  }

  if (!show) return null
  return (
    <ModalContainer>
      <Modal>
        <span style={{ textAlign: 'right', margin: '15px', fontSize: '20px', cursor: 'pointer', color: 'grey' }}
          onClick={onClose}>&#x2715;</span>
        <FormContainer>
          {status === 'success' ? (
            <>
              <ContactLabel>You’re all set 🎉</ContactLabel>
              <div style={{ padding: '10px 0px 20px', fontSize: '18px', color: '#4B586A' }}>
                {message}
              </div>
              <div style={{ fontSize: '14px', color: '#8790A5' }}>
                We’ve emailed you the download link and a link to activate your ALPHA trial. Please check your inbox (and spam folder).
              </div>
            </>
          ) : (
            <>
              <ContactLabel>Start your 7-day ALPHA free trial</ContactLabel>
              <InputContainer>
                <Label>Name</Label>
                <InputField onChange={update('name')} value={form.name} id="alpha-name" />
              </InputContainer>
              <InputContainer>
                <Label>Email</Label>
                <InputField onChange={update('email')} value={form.email} id="alpha-email" />
              </InputContainer>
              <InputContainer>
                <Label>Mobile (optional)</Label>
                <InputField type="tel" onChange={update('phone')} value={form.phone} id="alpha-phone" />
              </InputContainer>
              {status === 'error' && (
                <div style={{ color: '#D64545', fontSize: '14px', marginBottom: '10px' }}>{message}</div>
              )}
              <Button
                style={{ fontSize: '26px', opacity: status === 'loading' ? 0.6 : 1 }}
                onClick={submit}
              >
                {status === 'loading' ? 'Submitting…' : 'Start Free Trial'}
              </Button>
            </>
          )}
        </FormContainer>
      </Modal>
    </ModalContainer>
  )
}

// Indicator card: clean thumbnail image that links to the walkthrough video.
const IndicatorCard = ({ image, video, title, tagline, body, onTry }) => (
  <Card>
    <div style={{ flexBasis: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href={video} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
      </a>
    </div>
    <div style={{ flexDirection: 'column', marginLeft: '10px', flexBasis: '70%', padding: '10px' }}>
      <div style={{ fontSize: '24px', padding: '12px 0px' }}>{title}</div>
      <div style={{ fontSize: '14px', padding: '0px 0px', color: '#172647' }}>{tagline}<br /><br /></div>
      <div style={{ fontSize: '14px', padding: '0px 0px', color: '#4B586A', fontWeight: 'normal' }}>{body}</div>
      <Button onClick={onTry} style={{ marginTop: '20px', padding: '5px 10px', fontSize: '20px' }}>
        Download Free Trial
      </Button>
    </div>
  </Card>
)

const IndicatorsPage = () => {
  const [showIndicator, setShowIndicator] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [showAlpha, setShowAlpha] = useState(false) // kept for when ALPHA is re-enabled

  return (
    <Layout
      title={'Pro FX Trading Indicators'}
      description={"London Trading Institute's Pro FX indicators — Daily Trading Range, Auto Fibonacci, Supply & Demand zones, automatic trend lines and a position risk manager. Download a free trial."}
    >
      <IndicatorTrialModal show={showIndicator} onClose={() => setShowIndicator(false)} />
      {/* ALPHA modal hidden until the EA is ready to go public:
      <AlphaTrialModal show={showAlpha} onClose={() => setShowAlpha(false)} /> */}

      <IntroCardIndicatorPage data={Content.introCard} />

      <Banner style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '30px 20px' }}>
        <div style={{ maxWidth: '500px' }}>Try our indicators free before you commit.</div>
        <div style={{ fontSize: '18px', marginTop: '10px' }}>Free trials available below.</div>
        <Button onClick={() => setShowIndicator(true)} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '20px' }}>
          Download Free Trial
        </Button>
      </Banner>

      {/* ---------- INDICATORS ---------- */}
      <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
        <div>
          <div>Indicators</div>
          <Underline />
        </div>
      </Header>
      <RDiv style={{ paddingBottom: '100px', paddingTop: '1px' }}>
        <IndicatorCard
          image={dtr}
          video="https://www.youtube.com/watch?v=4M4fadtAJhE"
          title="Daily Trading Range (DTR)"
          tagline="Use this to accurately predict the high and low of the day with great precision."
          body={`Too often in trading, we’ve seen traders go for unrealistic targets — targets that are outside the daily trading ranges of individual currency pairs. Understanding the daily trading range and its impact on currencies has vastly improved our trading performance. The Daily Trading Range indicator allows you to identify the predicted high and low of the day, helping you match significant daily levels and find levels of confluence.`}
          onTry={() => setShowIndicator(true)}
        />
        <IndicatorCard
          image={trendLines}
          video="https://www.youtube.com/watch?v=s3Gw_QKCqBM"
          title="Automatic Trend Lines"
          tagline="Drawing the correct trendlines is essential to trading. Use our auto trendline tool to avoid costly mistakes."
          body={`Trend lines are essential to identifying trend direction and momentum. Drawn correctly, they can also be powerful tools for knowing when to get in and out of the market. This tool automatically detects trends for you and plots the lines, leaving you free of doubt when identifying overall trends and entry and exit points.`}
          onTry={() => setShowIndicator(true)}
        />
        <IndicatorCard
          image={autoFib}
          video="https://www.youtube.com/watch?v=gj0L6P004Yc"
          title="Auto Fibonacci"
          tagline="An advanced automation tool to plot the ABCD market waves for you with predictable entries and matching profit targets."
          body={`Based on an advanced Fibonacci pattern, this system enhances the Fibonacci pattern from being just an indicator to being a complete stand-alone strategy. It automatically loads the Fibonacci swings onto any time frame, showing the market’s exact position in terms of retracement/extension and providing precise target and stop areas. Available as both a manual and automated indicator.`}
          onTry={() => setShowIndicator(true)}
        />
        <IndicatorCard
          image={supplyDemand}
          video="https://www.youtube.com/watch?v=Cvx8gAlzSuw"
          title="Supply & Demand Zones"
          tagline="Use the same trading levels that institutions use so you are always trading off the best information."
          body={`This indicator slashes the time it takes to identify key levels of support and resistance on your charts. Markets consistently react to these levels, and knowing where they are is a vital component of success. With key levels drawn in for you automatically, your focus shifts from finding a trade to managing the trade instead.`}
          onTry={() => setShowIndicator(true)}
        />
        <IndicatorCard
          image={positionRisk}
          video="https://www.youtube.com/watch?v=Cvx8gAlzSuw"
          title="Position Risk Manager"
          tagline="An intuitive tool that helps you manage risk on your position and calculate the position size for you based on your appetite."
          body={`This tool slashes the time it takes to identify your position size and risk-to-reward ratio, without much effort, allowing you to focus on your trade setup instead. Use sensible risk-to-reward ratios and leave the calculation to this tool.`}
          onTry={() => setShowIndicator(true)}
        />
      </RDiv>

      {/* ---------- EXPERT ADVISORS (EAs) — HIDDEN FOR NOW ----------
          ALPHA is built and wired to the licence manager + GHL, but is kept
          unpublished until its Vantage setup instructions, email and video are
          ready (per Andy). To re-enable: uncomment the <AlphaTrialModal/> above
          and this section.

      <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
        <div>
          <div>Expert Advisors (EAs)</div>
          <Underline />
        </div>
      </Header>
      <RDiv style={{ paddingBottom: '100px', paddingTop: '1px' }}>
        <Card>
          <div style={{ flexBasis: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={alpha} alt="ALPHA Expert Advisor" style={{ width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
          </div>
          <div style={{ flexDirection: 'column', marginLeft: '10px', flexBasis: '70%', padding: '10px' }}>
            <div style={{ fontSize: '24px', padding: '12px 0px' }}>ALPHA</div>
            <div style={{ fontSize: '14px', padding: '0px 0px', color: '#172647' }}>
              An automated Expert Advisor (EA) for MetaTrader 4 &amp; 5 that executes a rule-based strategy for you.<br /><br />
            </div>
            <div style={{ fontSize: '14px', padding: '0px 0px', color: '#4B586A', fontWeight: 'normal' }}>
              ALPHA runs a clearly defined, rule-based strategy automatically on your MT4/MT5 account. Start a 7-day free trial to test it on your own account.
            </div>
            <Button onClick={() => setShowAlpha(true)} style={{ marginTop: '20px', padding: '5px 10px', fontSize: '20px' }}>
              Start 7-Day Free Trial
            </Button>
          </div>
        </Card>
      </RDiv>
      ---------- end hidden EA section ---------- */}

      <Testimonial />
      <Booking />
      <div id="widget" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }} />
    </Layout>
  )
}

export default IndicatorsPage
