import React from 'react'
import {IntroCardEventsPage, Layout,Testimonial, Booking } from '../components'
import { Card, Header, RDiv, Underline } from '../globalStyles'
import { Button } from '../components/Booking/Booking.element';
import laptop from '../img/laptop.png';

const AboutPage = () => {
    return (
        <Layout title={"Live Trading Events & Webinars"} description={"Join London Trading Institute's live trading events and webinars covering forex, crypto and systematic trading."}>
            <IntroCardEventsPage/>
            <Header className="font-mobile" style={{backgroundColor: "#F7F9FF"}}>
                  <div>
                      <div style={{fontSize: "24px"}}>
                          Next Live Event
                      </div>
                      <Underline/>
                  </div>
            </Header>
            <RDiv style={{paddingBottom: "100px", paddingTop: "1px"}}>
              <Card>
                  <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img
                    className="yt-video"
                    src={laptop}
                    >
                    </img>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                        Learn My Exact Rule Based Blueprint for Trading Forex
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                    On this FREE Training Former Hedge Fund Trader Reveals His Little-Known FX Secrets That Anyone Can Use to Profit Consistently<br/><br/>
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    Learn my beginner friendly strategy that works on all major FX  pairs with over 10 years track record of results<br/><br/>
                    Anyone can get lucky on a few trades but you are going to learn the secret to making profits over and over again. <br/><br/>
                    Follow a proven Trading Strategy and then leverage OPM to make a Six Figure Income in under 3 months.<br/><br/>
                    </div>
                    <a href="https://elite.londontradinginstitute.com/registration">
                        <Button onClick={()=>{}} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px", width: "280px"}}>
                        REGISTER
                        </Button>
                    </a>
                  </div>
              </Card>
              </RDiv>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
