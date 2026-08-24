import React from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer, RDiv } from '../globalStyles'
import andy1 from '../img/andy1.png'
import atp from '../img/atp1.jpg'

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
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 2
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
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
            <IntroTitle style={{fontSize: "28px"}}>
                About this Course
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                Based either online through our innovative online learning portal, or in-house at our state-of-the-art offices in the City of London, students have the opportunity to learn
                forex trading directly from career professional traders as they trade live across the Forex markets. <br/> <br/>
                Whether you are a beginner in trading, or you have some experience and are seeking to enhance your skills, our career trading programmes are designed to allow for flexibility customisation, so that you have everything you need to get you to the next level. <br/><br/>
                To learn Forex trading professionally requires commitment, a desire to succeed, and a helping hand from industry professionals who have been where you are and have come out of the other side. You will learn to trade Forex directly from senior traders, who make a living in trading, and mentors whose life’s work is to create successful traders.This inside knowledge is invaluable in your journey of learning how to trade the financial markets.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Flexible Learning Options
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            We understand that many people are unable to commit a large amount of time to a thorough trading education due to family / work commitments. So we have ensured that all our trading programmes have the flexibility to be delivered on your terms, on your budget, and around your schedules, without neglecting the quality of the teaching. Regardless of the method or the period, the education you receive will be second to none.
If attending a trading programme in London is not possible, why not join us on our award-winning online trading course? It will still allow you to access the same trading education and unparalleled support without ever having to leave your house.
You’re unique – so why would you ever go for a “one-size-fits-all” approach to your learning?<br/><br/>
If you would like to discuss which options would be most suitable for you, let’s have a conversation so that we can assess your current level of education / experience, your objectives, and your needs, so that we can tailor a programme to fit you. Book a free consultation today and take the first exciting step toward finding which path of success is best suited to you.

            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
            4 Pillars of Education
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                The Associate Financial Trading Programme is the ultimate Forex Trading course for beginners & intermediate level traders. It is a comprehensive education to the world of Foreign Exchange (FX) trading and is designed to help you establish a solid foundation upon which you can hone and improve your trading skills<br/><br/>
                In this course, we focus on four distinct, equally important areas of study – Technical Analysis, Fundamental Analysis, Risk and Money Management and Trading Psychology. These are the four pillars of successful trading.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
               <Bullet/>Technical Analysis
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "28px"}}>
            A big focus of the Associate Trading Programme is teaching you how to use trading charts to predict the likely direction of the market. Some of the topics include Supply and Demand, Price Action Trading, Trading Indicators, Chart Patterns and Wave Analysis.
Technical analysis, when used correctly, will allow you to learn how to trade Forex like the professionals do.  No longer will you be the last one in on a big move and wonder why you are never in at the right time – or equally frustrating – in at the right time, but on the wrong side of the move.
<br/><br/>
By learning how to trade directly from industry experts, with decades of experience in large hedge funds and investment banks, you will learn how to use technical analysis the same way that big investment institutions do.
<br/><br/>
Crucially, you will learn how to piece all these together to form your very own customised trade plan.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Fundamental Analysis
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "28px"}}>
                Fundamental Analysis is the study of macro-economic data and its effect on the markets.
                In this course, you will learn how and why news releases affect currency prices, what specific data to focus on, and how to incorporate this knowledge into your overall analysis, giving you a competitive advantage in trading.
                <br/><br/>
                Although we believe that the market is driven by technical analysis, it is important to learn how to interpret major financial announcements as they can have a major impact on the short-term direction of a currency pair.
                <br/><br/>
                Fundamental announcements also create a lot of volatility in the markets (especially if the consensus estimate is wrong), so you must be prepared for anything.
                We believe if you want to learn to trade Forex like a professional, then you must understand the macro implications on a currency pair, so you can make the correct decisions ahead of time. By being prepared you immediately get an edge over other traders.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Trading Psychology
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "28px"}}>
                Trading psychology is a fundamental component of successful trading. It is one of the main reasons over 90% of new traders are unable to find consistent profitability.
                It is far too frequently overlooked by traders and educators alike – but experience shows that without learning to understand your own trading psychology, you are missing a key ingredient for success.
                <br/><br/>
                In this course, we explore common psychological pitfalls that trap an overwhelming number of new and experienced traders alike. We teach you the skills necessary for understanding these pitfalls. Equipping yourself with the ability to manage your own emotions, in a market driven by emotion – is an obvious competitive advantage.
                <br/><br/>
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <div style={{display: "flex"}}>
                <Bullet style={{margin: "10px"}}/>
                    <div>
                        Risk and Money Management
                    </div>
            </div>
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "28px"}}>
            Risk and money management is a fundamental component to trade successfully.
            In this section you will learn how to limit your risk and maximise your profit. When learning how to trade it is more important to focus on protecting your account rather than focussing on the how much money you are going to make. 
            It is a common mistake for beginners learning to trade, to only think about how much money they are going to make if the trade works out.
            This type of short-sighted thinking is what leads to people blowing up their accounts when trades go the wrong way.

                <br/><br/>
                You are going to learn to think like a professional and you will learn to trade exactly how institutional traders trade. The goal here is to keep you in the game long enough so you can master Forex Trading and become proficient enough to be classed as a professional.
                <br/><br/>
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Core Learning Objectives
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
            The Associate Trading Programme aims to give you a solid foundation in Forex trading. You are going to learn forex trading strategies that are used by our professional traders, and you will become proficient in the 4 pillars of trading; technical analysis, fundamental analysis, risk and money management and trading psychology.<br/><br/>
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "0px"}}>
                Successful completion means you would have achieved the following core objectives:
            </IntroTitle>
            <div style={{marginLeft: "0px", marginTop: "20px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Development and implementation of your own Trade Plan that incorporates good Equity and Risk Management
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>A solid understanding of what constitutes high probability trades – and how to spot the difference between good trades and bad trades
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Development of a systematic approach to trading cantered around measured rules that keep you accountable
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Tracking and improving your trading performance by learning how to analyse your trades correctly and tweaking your approach
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Working knowledge and understanding of the fundamental factors underpinning the core G7 currencie
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
                <Bullet/>Comprehension of common psychological pitfalls that affect success and consistency
            </DescriptionContainer>
            </div>
        </div>
    </>
    )
}

const IndexPage = () => {
    return (
        <Layout title={"Associate Trader Programme"} description={"A structured trading programme teaching the core skills, strategy and risk management required to trade the markets professionally."}>
            <IntroCardCoursePage title={'Associate Trader Programme'} img={atp}
            description={'Learn the tools you need to become a consistantly profitable trader in the Forex markets'}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                >
                </CourseItem>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
