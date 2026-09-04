import React, { useState } from 'react'
import Layout from './Layout/Layout'
import { Button } from './Courses/Courses.elements'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from './ContactForm/ContactForm.elements'

// Reusable per-bot page template (PLACEHOLDER preview for Andy).
// Real copy, equity-curve images, videos and Vantage setup steps to be supplied.

const wrap = { maxWidth: '1080px', margin: '0 auto', padding: '0 24px', width: '100%' }
const eyebrow = { fontSize: '13px', letterSpacing: '2px', color: '#FFAB00', fontWeight: 700, marginBottom: '12px' }

const SectionHeading = ({ children }) => (
  <>
    <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#0F1C38', margin: '0 0 6px' }}>{children}</h2>
    <div style={{ width: '54px', height: '4px', background: '#FFAB00', borderRadius: '2px', marginBottom: '24px' }} />
  </>
)

const Placeholder = ({ label, height = 220 }) => (
  <div
    style={{
      border: '2px dashed #C3CBDA',
      borderRadius: '10px',
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
      boxSizing: 'border-box',
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
      <FormContainer style={{ maxWidth: '460px', margin: 0 }}>
        <ContactLabel>You’re all set 🎉</ContactLabel>
        <div style={{ padding: '10px 0px', fontSize: '18px', color: '#4B586A' }}>{message}</div>
        <div style={{ fontSize: '14px', color: '#8790A5' }}>
          Check your inbox (and spam) for your download and setup link.
        </div>
      </FormContainer>
    )
  }

  return (
    <FormContainer style={{ maxWidth: '460px', margin: 0 }}>
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
      <div style={{ padding: '60px 0 40px' }}>
        <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px' }}>
            <div style={eyebrow}>TRADING BOT (EA)</div>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#0F1C38', margin: '0 0 14px' }}>{name}</h1>
            <p style={{ fontSize: '18px', color: '#4B586A', lineHeight: 1.6, margin: '0 0 24px' }}>{tagline}</p>
            {status === 'coming-soon' ? (
              <div style={{ display: 'inline-block', background: '#EEF1F8', color: '#4B586A', padding: '10px 18px', borderRadius: '6px', fontSize: '16px' }}>
                Coming soon
              </div>
            ) : (
              <a href="#trial" style={{ textDecoration: 'none' }}>
                <Button style={{ fontSize: '18px' }}>Start 7-Day Free Trial</Button>
              </a>
            )}
          </div>
          <div style={{ flex: '1 1 320px' }}>
            <Placeholder label="Equity curve / performance chart — image to be added" height={260} />
          </div>
        </div>
      </div>

      {/* What it is */}
      <div style={{ background: '#F7F9FF', padding: '48px 0' }}>
        <div style={wrap}>
          <SectionHeading>What is {name}?</SectionHeading>
          <p style={{ fontSize: '16px', color: '#4B586A', lineHeight: 1.8, maxWidth: '760px' }}>{description}</p>
          {bullets.length > 0 && (
            <ul style={{ fontSize: '16px', color: '#4B586A', lineHeight: 2, maxWidth: '760px' }}>
              {bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          )}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: '48px 0' }}>
        <div style={wrap}>
          <SectionHeading>How it works</SectionHeading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ flex: '1 1 320px' }}>
              <Placeholder label="Walkthrough video — to be added" height={220} />
            </div>
            <div style={{ flex: '1 1 320px' }}>
              <Placeholder label="Setup instructions (designed for Vantage) — steps + PDF to be added" height={220} />
            </div>
          </div>
        </div>
      </div>

      {/* Signup */}
      <div id="trial" style={{ background: '#F7F9FF', padding: '48px 0 80px' }}>
        <div style={wrap}>
          <SectionHeading>{status === 'coming-soon' ? 'Register your interest' : 'Start your free trial'}</SectionHeading>
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
