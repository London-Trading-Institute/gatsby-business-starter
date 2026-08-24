import React from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'
import atp1 from '../img/atpp.jpg'

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
                <IntroTitle style={{fontSize: "24px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 1
                </IntroTitle>
                <div>
                <IntroTitle style={{fontSize: "24px"}}>
                    Begin Your Trader Training
                </IntroTitle>
                <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Find out what it takes to become our next Associate Trader via our online video’s presented by Head Trader Andy Demi.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Get access to LIVE weekly coaching and our private Elite Traders Club to ask any of your questions & super charge your learning.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Learn the skills required to have the confidence to start taking trades differently than 95% of the current retail trading market.
                </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "24px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 2
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "24px"}}>
                        Create Your Plan
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> By Now you’ll know how to identify Money Making Opportunities.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/>  You’ll also know how to Manage Your Risk just like a Pro Trader.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> Now it’s time to Create Your Trading Plan & Refine Your Trades.
                    </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "24px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 3
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "24px"}}>
                        Putting It All Together
                    </IntroTitle>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Strategy
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        You will now understand what it takes to find Low Risk, High Probablity trade set-ups.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Taking Action
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        Your new knowledge of the markets will give you everything that you need to trade with confidence.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Become A Trader
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
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
                The Advanced Financial Trading Programme is a complete trading mastery programme.<br/><br/> With the
                assumption that you have grasped the basics, the advance programme builds on the knowledge you
                have by adding an extra dimension to the way you view markets.
            </DescriptionContainer>
                    </div>
            <CourseBanner>
                Trade Forex Like A Pro
            </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Advancing your Current Knowledge
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "30px"}}>
                In this programme we re-visit some familiar trading concepts, and we add another layer of
                understanding to them for more effective use. <br/><br/>
                For example, looking at the markets from different
                perspectives, or taking basic risk management and adding customisation to give you maximum
                returns based on your personal statistics. And this is just scratching the surface.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>New Advanced Tools
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "30px"}}>
                On top of some familiar concepts, we introduce you to our proprietary methods such as the
                Geometric Angles for hidden support and resistance and Auto-Fibonacci wave analysis (for precision
                entry and exit points).
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Timing the Markets Like a Pro
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "30px"}}>
                Understanding how to use these effectively for maximum impact takes up a lot of the course but
                being able to apply these in the markets is a game changer in terms of taking your trading expertise
                and results to another level.<br/><br/>
                The goal is to teach you how to predict where the market is going and
                how it’s going to get their and how long it might take. That’s the level we are striving for.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Proprietary Trading Strategies
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "30px"}}>
                Utilising these advanced concepts, we progress you to our Proprietary Trading Strategies, the same
                one’s used by our professional traders. These strategies can be used as they are, however, we do
                encourage you and give you the knowledge to take these strategies and enhance and customise
                them further through your own testing. This is optional but recommended.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Become an Elite Level Trader
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "30px"}}>
                If you are looking to achieve the status of an ‘Elite Trader’ then this programme has everything you
                need to achieve that goal.
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Core Learning Objectives
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "0px"}}>
                Successful completion means you would have achieved the following core objectives:
            </IntroTitle>
            <div style={{marginLeft: "0px", marginTop: "20px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Mastering multiple-time frame analysis to pinpoint precise entry and exits with maximum
reward to risk
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Developing a solid understanding of high probability and low probability scenarios
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Advance understanding and application of technical indicators
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Acquiring the right mindset to think and act like a professional trader
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Learning how to use in-trend geometric price angles to predict market turning points
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Utilising the Daily Trading Range for building a high probability day trading strategy
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Learning how to use the LTI Proprietary Trading Strategies and implementing them in the
markets
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Back Testing and personalising your trading strategies to enhance and improve what you
already know
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Developing advanced Risk and Money management techniques to maximise return on
investment
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Learning to use the Auto-Fibonacci wave analysis to be able to get in at the best possible
price and exit before the move ends
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Enhancing your trade plan to incorporate new strategies and advance concepts
            </DescriptionContainer>
            </div>
        </div>
    </>
    )
}

const IndexPage = () => {
    return (
        <Layout title={"Advanced Forex Course"} description={"An advanced forex trading course for traders building on the fundamentals — refine your strategy, execution and risk management."}>
            <IntroCardCoursePage img={atp1} title={'Advanced Forex Course'} 
            description={'Learn the tools you need to become a consistantly profitable trader in the Forex markets'}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                    // syllabus={<Syllabus/>}
                >
                </CourseItem>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
