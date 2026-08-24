import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem, Form } from '../components'
import { Banner, CourseBanner } from '../components/Courses/Courses.elements'
import { Button, DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'
import intro from '../img/intro.jpg'
    
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
                    A Trader for 18 years, he’s worked on the Trading Floors at some of the Biggest Banks & Hedge Funds such as J.P. Morgan, Schroders & Barclays Capital. He will have your back and teach you about how to trade like a pro.
                    </div>
                  </div>
            </div>
        </FlexContainer>
    )
}

const Syllabus = () => {
    return(
        <>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 1
                </IntroTitle>
                <div>
                <IntroTitle style={{fontSize: "28px"}}>
                    Begin Your Trader Training
                </IntroTitle>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Find out what it takes to become our next Associate Trader via our online video’s presented by Head Trader Andy Demi.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Get access to LIVE weekly Coaching and our private Elite Traders Club to ask any of your questions & super charge your learning.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Learn the skills required to have the confidence to start taking trades differently than 95% of the current retail trading market.
                </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 2
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
                        Create Your Plan
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> By Now you’ll know how to identify Money Making Opportunities.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/>  You’ll also know how to Manage Your Risk just like a Pro Trader.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> Now it’s time to Create Your Trading Plan & Refine Your Trades.
                    </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 3
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
                        Putting It All Together
                    </IntroTitle>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Strategy
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        You will now understand what it takes to find Low Risk, High Probablity trade set-ups.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Taking Action
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        Your new knowledge of the markets will give you everything that you need to trade with confidence.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Become A Trader
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                    Continue building your momentum & get access to our Capital Growth Programme with funding up to $2M
                    </DescriptionContainer>
                </div>
            </FlexContainer>
        </>
    )
}

const OverView = () => {
    return(
        <>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "24px"}}>
                About this Course
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            Learn what it takes to become a successful Forex trader. This course is aimed to give you an introduction into the world of Forex trading. <br/><br/>
            To become a successful trader, you must have variety of attributes, this course aims to give you an insight into what those attributes are and how you as an individual can fully benefit. Every trader is different, this course will help you identify what kind of trader you will be and what areas to focus on.<br/><br/>
            You should take this course if you are interested in becoming a trader, either as a profession or to supplement your income. This will give you a good grounding about what it takes to become a trader.<br/><br/>
            There are 5 sections to this course that go into giving you a succinct introduction to the FX market, technical analysis, risk management, strategies and trading psychology.<br/><br/>
            This course gives you a strong base to tackle the financial markets better than your average newbie. This course also gives you a solid base to approach our 3 month programme with a head strart. To take your trading to a professional standard it is recommended that you goes through our 12 month programme upon completion of the course to reach that advanced, professional level.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            Learn Your Trading Style
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            Every trader is different, and thus there is no such thing as a one size fits all
trading approach. However, there is a correct way of doing things that every
trader must follow. This course will help you identify some of those things
and help you pinpoint what type of trader you will be and what areas to focus
on.<br/><br/>
You should take this course if you are interested in becoming a Forex trader,
either as a profession or to supplement your income. This will give you a
solid foundation to build upon.<br/><br/>
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Course Learning Objectives
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
        <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            Below are the core learning objectives for this course:
        </IntroTitle>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>Trading Like a Business
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>How much can you earn as an FX Trader just getting started
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>How long do I need to study before I can start making money?
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>What is the best strategy/indicators I should use to get the most profit?
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>Can anyone succeed at trading or do I need a certain type of profile
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>Is it true that it’s very difficult to make money from trading?
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>How do I make a few extra hundred pounds whilst working a fulltime job?
        </DescriptionContainer>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet></Bullet>How much time do I need to learn trading?
        </DescriptionContainer>
        </div>
        <CourseBanner>
            Next Steps to Trading Success
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
        <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            This Beginner FX Course gives you a strong base to tackle the financial
            markets better than your average newbie.
            Upon completion we recommend you consider taking your trading to another
            level by completing our <Link to="/associate-trader-programme">3-month Associate Trader Programme</Link>.<br/><br/>
            This programme will not only give you the knowledge to consistently win at
            trading, but you will also have the support of expert trading professionals
            with decades of trading experience at institutional level.
            </DescriptionContainer>

            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            No more guessing which trading tools to use, or which indicators are the
            best. You will be guided to build your own custom trade plan that works for
            your personality and profile.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>

            This is the professional trader’s approach and how you can win at FX trading.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                You may also be interested in the <Link to="/associate-trader-programme">3 Month Associate Trader Programme</Link>.
            </DescriptionContainer>
        </div>
        </>
    )
}

const IndexPage = () => {
    const [show, toggleModal]  = useState(1)

    const enrollNow = () => {
        toggleModal(show+1)
    }

    return (
        <Layout title={"Free Introductory Forex Course"} description={"A free introduction to trading and the London Trading Institute approach — ideal for beginners starting their trading journey."}>
            <Form emailInput={''} showInput={show}/>
            <IntroCardCoursePage img={intro} title={'Introductory Forex Course'} description={''}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                >
                </CourseItem>
                <div style={{backgroundColor: "rgb(247, 249, 255)", textAlign: "center", paddingBottom: "20px"}}>
                <Button onClick={enrollNow}>ENROLL NOW</Button>
                </div>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
