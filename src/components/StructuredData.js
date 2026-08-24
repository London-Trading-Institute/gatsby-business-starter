import React from 'react'
import { Helmet } from 'react-helmet'

// Single source of truth for the site's canonical URL.
// NOTE: verify this matches the live domain in the Netlify dashboard.
export const SITE_URL = 'https://www.londontradinginstitute.com'

// Organisation + WebSite schema. This is site-wide (rendered from Layout) so
// every page carries it. It tells LLMs / answer engines exactly who this
// business is, where it's based, and how to reach it — the foundation for the
// site being understood and recommended.
const organization = {
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'London Trading Institute',
  alternateName: 'LTI',
  url: SITE_URL,
  // TODO: point this at the real LTI logo asset if /img/logo.svg is a placeholder.
  logo: `${SITE_URL}/img/logo.svg`,
  image: `${SITE_URL}/img/og-image.jpg`,
  email: 'info@londontradinginstitute.com',
  telephone: '+44 20 3887 7398',
  description:
    'London Trading Institute is a London-based trading education provider offering courses and one-to-one mentorship in forex, cryptocurrency, options and algorithmic trading to help individuals become professional traders.',
  knowsAbout: [
    'Forex trading',
    'Cryptocurrency trading',
    'Options trading',
    'Algorithmic trading',
    'Technical analysis',
    'Trading psychology',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '167-169 Great Portland Street, 5th Floor',
    addressLocality: 'London',
    postalCode: 'W1W 5PF',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.youtube.com/c/LondonTradingInstitute',
    'https://www.facebook.com/groups/fxtradersclub/',
  ],
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'London Trading Institute',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [organization, website],
}

export const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
  </Helmet>
)

// Per-course schema. Rendered from IntroCardCoursePage, so every course page
// (forex, crypto, options, algo, etc.) automatically describes itself as a
// Course offered by LTI.
export const CourseSchema = ({ name, description }) => {
  if (!name) return null

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description: description || `${name} at London Trading Institute.`,
    provider: {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'London Trading Institute',
      url: SITE_URL,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(course)}</script>
    </Helmet>
  )
}
