import React from 'react'
import {IntroCard, About, Layout, Courses,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { Banner, CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'

const Mentors = () => {
    return(
        <FlexContainer style={{padding: "0px 40px"}}>
            <img
                style={{borderRadius: "6px"}}
                src={andy1}
                height={180}
            >
            </img>
            <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{flexDirection: "column", marginLeft: "20px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                        Andy Demi
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        CEO | Head Trader
                        <br/>
                        <br/>
                      </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    A Trader for 17 years, he’s worked on the Trading Floors at some of the Biggest Banks & Hedge Funds such as J.P. Morgan, Schroders & Barclays Capital. He will have your back and teach you about how to trade like a pro.
                    </div>
                  </div>
            </div>
        </FlexContainer>
    )
}

const Syllabus = () => {
    return(
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
            Programme duration: 6 months
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Join me on this programme and for the next 6 months it will be literally like sitting in my office watching over my shoulder. Together we’re going to be looking for a mixture of 100X coins plus tried and tested stable coins to grow our portfolio. You’ll get access to my confidential market updates along with my advice on what I’m buying, what I’m staking and when I’ll be taking profits. As soon as I have a new investment to add to the portfolio you’ll be alerted right away so that you can take action. You’ll also get my mentor shop and guidance within a small group setting along with a plan to ride this crazy crypto journey with grace and ease thanks to all my trading experience rather than being stressed out like almost all of the other retail traders.
            </DescriptionContainer>
        </div>
    )
}

const OverView = () => {
    return(
        <>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
                About this Course
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                Together we’re going to be looking for a mixture of 100X coins & tried & tested projects to grow our portfolio. <br/>
                You’ll get access to my confidential market updates along with my advice about if I’m buying, staking or taking profits.<br/>
                soon as I have a new investment to add to the portfolio you’ll be alerted right away so you can take action.<br/>
                You’ll also get my group mentorship and a plan to ride this crazy crypto journey with all my trading experience.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Skills you will gain
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>This is a Fast Track To Building a sustainable and Long Term 7-Figure Cryptocurrency Portfolio.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>  See how I professionally manage my Crypto Portfolio to maximise long & short term returns. <br/>
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
               <Bullet/> Learn how to earn dividends from your crypto portfolio to compound your returns much faster!
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Learn how to invest like a Pro
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
                Work Exclusively with us to grow our Crypto Portfolio’s
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "30px", color:"#172647", fontWeight: "bold"}}>
                <Bullet/> My Market Knowledge
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "15px", paddingLeft: "25px"}}>
            Get regular updates from us on the market plus we buy a mixture of low, medium and high risk coins designed to grow Our accounts in the fastest and safest way over the next 2-3year period.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "30px", color:"#172647", fontWeight: "bold"}}>
                <Bullet/> Momentum plays within the Crypto Market
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "15px", paddingLeft: "25px"}}>
                As I come across some extra projects that are outside our portfolio but have a high probability of 2/3X returns then You’ll also get an update from me to keep your account growing as fast as us.           
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "30px", color:"#172647",  fontWeight: "bold"}}>
                <Bullet/> Beginner Friendly
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "15px", paddingLeft: "25px"}}>
                Even if you’ve never done this before I’ll show you what you need to know to get started and keep your account safe. You’ll also be surprised how quickly you will cut out the clutter of L1 this and De-Fi that in order to take advantage of all the opportunities.            
            </DescriptionContainer>
        </div>
        <CourseBanner>
            3 Months Passive Income Builder
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            Create a passive portfolio that is built to make money
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Here is where the rubber really meets the road as you will get the same High, Medium & Low Risk Crypto investments that I will personally be investing in!
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Get my confidential Crypto updates
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            3 months of everything you need to know to help your portfolio continue to grow!<br/><br/>
            Let me save you thousands of hours in research AND remove ALL of the guesswork Get these confidential crypto reports to find out the latest Mega Trends, Entry & Exit points Plus so much more that won’t fit on this page!
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Manage your portfolio like a pro
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
        <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Skyrocket your passive income & stacking rewards!
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Knowing how and when to maximise your gains to increase your ROI is a skill that most investors will never fully understand. <br/>
            Here I will share with you some of the key secrets that I have learned during my career.            
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                6 months VIP Group Membership
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Our own private group for members only where we can discuss how our low, medium and high risk investments are going along <br/>
            with the latest news and views from the world of Cryptocurrency.         
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            Crypto Trade Tracker
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Being organised and tracking your trading is crucial to success which is why I created this Crypto Trade Tracker for my own personal use.<br/>
            Now you will get full access to this in order to track your own trades.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            Live Mind Medicine
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Get access to my wealth building mindset audios that I listen to on a daily basis<br/>
            so that I can keep myself grounded when investing in the crypto markets.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            My Personal Power Routine
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Learn how I create a power routine to make sure that I set myself up for success<br/>
            whatever I put mymind to and how you can apply this into your daily lives too!
            </DescriptionContainer>
        </div>
        </>
    )
}

const IndexPage = () => {
    return (
        <Layout>
            <IntroCardCoursePage title={'Crypto Like A Pro Investing'} description={'How to build a Passive Crypto Portfolio for potentially life changing gains'}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                    syllabus={<Syllabus/>}
                >
                </CourseItem>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
