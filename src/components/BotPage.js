import React, { useState } from 'react'
import Layout from './Layout/Layout'
import { Button } from './Courses/Courses.elements'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from './ContactForm/ContactForm.elements'
import { Header, Underline, RDiv } from '../globalStyles'

// Reusable per-bot page template (PLACEHOLDER preview for Andy).
// Real copy, equity-curve images, videos and Vantage setup steps to be supplied.

const Placeholder = ({ label, height = 240 }) => (
  <div
    style={{
      border: '2px dashed #C3CBDA',
      borderRadius: '8px',
      minHeight: height,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8790A5',
      fontSize: '15px',
      background: '#F7F9FF',
      textAlign: 'center',
      padding: '20px',
    }}
  >
    {label}
  </div>
)

const SignupForm = ({ productCode }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value })

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
        body: JSON.stringify({ ...form, product: productCode, trial_days: '7' }),
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

  if (status === 'success') {
    return (
      <FormContainer style={{ maxWidth: '480px' }}>
        <ContactLabel>You’re all set 🎉</ContactLabel>
        <div style={{ padding: '10px 0px', fontSize: '18px', color: '#4B586A' }}>{message}</div>
        <div style={{ fontSize: '14px', color: '#8790A5' }}>
          Check your inbox (and spam) for your download and setup link.
        </div>
      </FormContainer>
    )
  }

  return (
    <FormContainer style={{ maxWidth: '480px' }}>
      <ContactLabel>Start your 7-day free trial</ContactLabel>
      <InputContainer>
        <Label>Name</Label>
        <InputField onChange={update('name')} value={form.name} />
      </InputContainer>
      <InputContainer>
        <Label>Email</Label>
        <InputField onChange={update('email')} value={form.email} />
      </InputContainer>
      <InputContainer>
        <Label>Mobile (optional)</Label>
        <InputField type="tel" onChange={update('phone')} value={form.phone} />
      </InputContainer>
      {status === 'error' && (
        <div style={{ color: '#D64545', fontSize: '14px', marginBottom: '10px' }}>{message}</div>
      )}
      <Button style={{ fontSize: '24px', opacity: status === 'loading' ? 0.6 : 1 }} onClick={submit}>
        {status === 'loading' ? 'Submitting…' : 'Start Free Trial'}
      </Button>
    </FormContainer>
  )
}

const BotPage = ({
  name,
  tagline,
  description,
  bullets = [],
  productCode,
  status = 'available', // 'available' | 'coming-soon'
}) => {
  return (
    <Layout title={`${name} — Trading Bot`} description={tagline}>
      {/* Hero */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '50px 7% 30px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 340px' }}>
          <div style={{ fontSize: '13px', letterSpacing: '2px', color: '#FFAB00', marginBottom: '10px' }}>
            TRADING BOT (EA)
          </div>
          <div style={{ fontSize: '40px', fontWeight: 700, color: '#0F1C38', marginBottom: '14px' }}>{name}</div>
          <div style={{ fontSize: '18px', color: '#4B586A', marginBottom: '24px' }}>{tagline}</div>
          {status === 'coming-soon' ? (
            <div style={{ display: 'inline-block', background: '#EEF1F8', color: '#4B586A', padding: '10px 18px', borderRadius: '6px', fontSize: '16px' }}>
              Coming soon
            </div>
          ) : (
            <a href="#trial"><Button style={{ fontSize: '18px' }}>Start 7-Day Free Trial</Button></a>
          )}
        </div>
        <div style={{ flex: '1 1 340px' }}>
          <Placeholder label="Equity curve / performance chart — image to be added" height={260} />
        </div>
      </div>

      {/* What it is */}
      <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
        <div><div>What is {name}?</div><Underline /></div>
      </Header>
      <div style={{ padding: '20px 7% 10px', maxWidth: '900px' }}>
        <p style={{ fontSize: '16px', color: '#4B586A', lineHeight: 1.7 }}>{description}</p>
        <ul style={{ fontSize: '16px', color: '#4B586A', lineHeight: 1.9 }}>
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </div>

      {/* How it works */}
      <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
        <div><div>How it works</div><Underline /></div>
      </Header>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '20px 7% 30px' }}>
        <div style={{ flex: '1 1 320px' }}>
          <Placeholder label="Walkthrough video — to be added" height={220} />
        </div>
        <div style={{ flex: '1 1 320px' }}>
          <Placeholder label="Setup instructions (designed for Vantage) — steps + PDF to be added" height={220} />
        </div>
      </div>

      {/* Signup */}
      <div id="trial" style={{ padding: '20px 7% 80px' }}>
        <Header className="font-mobile" style={{ backgroundColor: '#F7F9FF' }}>
          <div><div>{status === 'coming-soon' ? 'Register your interest' : 'Start your free trial'}</div><Underline /></div>
        </Header>
        <div style={{ marginTop: '20px' }}>
          {status === 'coming-soon' ? (
            <Placeholder label="Interest / waitlist form — to be added when this bot launches" height={160} />
          ) : (
            <SignupForm productCode={productCode} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BotPage
