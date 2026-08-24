import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../SiteMetadata';
import { withPrefix } from 'gatsby';
import { Navbar, Footer } from '../../components';
import { OrganizationSchema } from '../StructuredData';
import GlobalStyle from '../../globalStyles';
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/600.css";

import "./index.css";

const TemplateWrapper = ({ children, title, description }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata()
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || siteDescription
  useEffect(() => {

    //trustpilot
    if (document.getElementById("trustpilot")) {
      const script = document.createElement('script');
      script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.sync.bootstrap.min.js';
      script.async = true;
      document.getElementById('trustpilot').appendChild(script)
    }

    if (document.getElementById("elite")) {
      const script = document.createElement('script');
      script.src = 'https://link.elite360.io/js/embed.js';
      script.async = true;
      document.getElementById('elite').appendChild(script)
    }

    if (document.getElementById("eliteFromIntro")) {
      const script = document.createElement('script');
      script.src = 'https://link.elite360.io/js/form_embed.js';
      script.async = true;
      document.getElementById('eliteFromIntro').appendChild(script)
    }

    if (document.getElementById("calendly")) {
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      calendlyScript.async = true;
      document.getElementById('calendly').appendChild(calendlyScript)
    }


    if (document.getElementById("webinar")) {
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://event.webinarjamdev.com/register/8xfn/embed-button';
      calendlyScript.async = true;
      document.getElementById('webinar').appendChild(calendlyScript)
    }


    const chatWidget = document.createElement('script');
    chatWidget.src = 'https://widgets.leadconnectorhq.com/loader.js';
    chatWidget.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    document.getElementById('chat-widget').appendChild(chatWidget);
    // if(document.getElementById("fb-root")){
    //   const fbScript = document.createElement('script');
    //   fbScript.nonce = "TE7pYs94";
    //   fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=401333224030827&autoLogAppEvents=1';
    //   fbScript.async = true;
    //   document.getElementById('fb-root').appendChild(fbScript)
    // }

    if (document.getElementById("banner")) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [{
          "proName": "OANDA:SPX500USD",
          "title": "S&P 500"
        }, {
          "proName": "OANDA:NAS100USD",
          "title": "Nasdaq 100"
        }, {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        }, {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        }, {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }],
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "in"
      });
      document.getElementById("banner").appendChild(script);;
    }
  }, []);
  
  return (
    <div>
      <GlobalStyle />
      <OrganizationSchema />
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon.png`}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet><div id="maneesh"></div>
      <Navbar />
      <div style={{
        overflow: "hidden"
      }}>
        {children}
      </div>
      <div id="chat-widget"></div>
      <chat-widget
        className="#chat-widget"
        location-id="cikP5PBhdRcZG8DtLEDD"
        prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png">
      </chat-widget>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
