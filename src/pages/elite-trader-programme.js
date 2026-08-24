import React from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle, Button } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'
import atp from '../img/etp.png'

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

    const initCalendly = () => {
        window.Calendly.initPopupWidget({
           url: 'https://link.elite360.io/widget/bookings/lti-strategy-call',
       });
     }
    return(
        <>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
                About this Course
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
              This programme is a forex mastery trading programme designed for all levels of trader who
              are ready to get into the elite group of professional FX traders who make money on a
              consistent basis. <br/><br/>If you aren’t fully committed to this goal, then this programme may
              not be for you.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Duration
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
              The course takes 4 months to complete and is structured with one-to-one tuition,
              online coaching tutorials and direct access to our head trader Andy Demi and his
              trading team.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
                Who is it for?
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
              Whether you are a complete beginner or a seasoned pro, this programme is
              customised for your needs, and completely focussed towards getting you consistently profitable.
            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
          One to One Coaching Makes all the Difference
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
              The opportunity to have direct access to an elite level senior trader is very rare, but
              this is exactly what you get on the Elite Trader Programme (one-to-one).
              <br/>
              <br/>
                If you have a question no need to wait for a group coaching session or to post in a
                Facebook group. Here you can go straight to the top and ask our head trader and his
                minions exactly what you are struggling with, and you will get the answer you are
                looking for. If anything is unclear, then we’ll shoot you a video to explain it better. If it’s
                still unclear, then we’ll jump on zoom or on the phone and break it down for you until
                you get it.
              <br/>
              <br/>
                That’s what the Elite Trader Programme (one-to-one) is all about. Ask as many questions
                as you like and get the support and help you need to become a consistent trader.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
               <div style={{display: "flex"}}>
                <Bullet style={{margin: "10px", marginLeft: "0px",marginRight: "16px", width: "11px"}}/>
                    <div>
                        Apply to be part of the Programme
                    </div>
            </div>
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "28px"}}>
              In order to join this programme, you will need to apply and speak with one of our
              trading team. We can only work with a limited amount of people, and we select people
              who will have the best chance of meeting the target.
              <br/>
              <br/>
                If we don’t think you are right for the programme then we will be honest with you and
                may suggest a different programme such as the <a href="/associate-trader-programme">Associate Trader Programme</a> which is
                a popular choice with beginner traders.
              <br/>
              <br/>
                The  Elite Trader Programme (one-to-one) is for those looking for one to one support to
                progress quickly to trading a six-figure trading account.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Course Commitment
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "26px"}}>
            The course can be completed on a part time basis and the coaching is conducted
remotely. We expect you to be able to dedicate a minimum of 10 hours a week to be
accepted on the programme.
                <br/><br/>
                Included in these 10 hours is weekly accountability reports as well as various
                homework exercises set by your mentor.
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
            <Bullet/>Pillar 1
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "25px"}}>
            Foundational Market Necessities - We will start things off by running you through the
            baseline fundamentals that you NEED to know before getting into trading the forex
            markets. Foundational Knowledge such as a solid understanding of how the market
            operates, how to perform fundamental analysis, how to understand price action and
            perform technical analysis, and how to predict future price movement by understanding
            market psychology.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
            <Bullet/>Pillar 2
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px", paddingLeft: "25px"}}>
            Advanced Technical Trading Tactics - Once you’ve formulated a solid understanding of
            the Foundations of Trading, it’s time to craft a profitable trading strategy. You’ll learn
            how to develop a trading strategy of your own, how to manage your money and
            position size appropriately, and how to back-test your strategy based on historical
            data. Most importantly though, this is the area where we dive deep into some of the
            advanced mindset techniques utilised by institutional traders in order to allow their
            trading strategies to operate how they are meant to. Upon completion of this pillar,
            you’ll be ready to take your assessment to receive a funded trading account available for you
            to trade with up to $200k.
            </DescriptionContainer>
        </div>
        <CourseBanner>
            Becoming an Elite Level Trader
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
        <IntroTitle style={{fontSize: "24px", marginTop: "0px"}}>
            Training for Beginners and Seasoned Pro’s
          </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          We assume that you have zero knowledge of financial markets, and you will be
learning from the ground up. However, if you are already trading but just need help to
get more consistent, then this programme is perfect for you also.
          <br/>
          <br/>
          The objective is not to teach you everything that has ever been created on trading the
markets. The goal is to help you focus on the core concepts required to get you to be a
consistent and profitable trader.
          </DescriptionContainer>
        <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
          Our Trading Methodology
        </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          Our core focus is on understanding price action and the role financial institutions play
in trading. Trading is very much driven by institutions and retail traders are often used
as bait to fulfil their own agendas. Once you understand what’s at play you will have a
light bulb moment.
          <br/>
          <br/>
          Within the programme you will come to understand about market structure, how the
market moves in Fibonacci waves, and you will also learn to identify and play the traps
that institutions like to put out.
          <br/>
          <br/>
          Indicators, retail theory, fundamental principles will also be taught, but you will learn to
use these in a unique and rule-based approach to trading.
          </DescriptionContainer>
          <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
          A Customised Approach
        </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          There is a no one size fits all approach. The goal is to model a successful trader and
then to use the information to create your own approach. We will help you develop
your own trading plan and you will be fully competent in implementing it consistently in
the market.
          </DescriptionContainer>
          <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
          Trade Setups and Educational Videos
        </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          The best way to learn is by observing and modelling. During your programme you will
be receiving regular trading videos and screenshots with trade setups (pre-trade) and
educational follow-ups on trades taken. These will be sent to you personally and you
will be able to instantly ask questions if anything is unclear, and you can choose to
take the same trade if you wish.
          <br/>
          <br/>
          The goal is not to give you tips and signals for trades. The goal is to give you
inspiration and knowledge so that you can master the techniques and identify your
preferred method of trading.
          <br/>
          <br/>
          <div style={{fontStyle: "italic", border: "1px dashed rgb(0, 182, 122)", borderRadius: "20px", padding: "20px"}}>
                    ‘The daily videos sent by Dan and Andy have been priceless for me and it’s allowed
          me to build my own trading strategy that I am so far consistently profitable on. I am on
          course to pass my funded challenge and trade a $200K account.’ - Alex Yallouros
          </div>
          <div style={{fontStyle: "italic", border: "1px dashed rgb(0, 182, 122)",marginTop: "10px", borderRadius: "20px", padding: "20px"}}>
                    ‘The last 4 months have been the most rewarding 4 months in my 4 years of learning to trade’ - Anita Moore
          </div>
          </DescriptionContainer>
          <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
          Trading for a living
        </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          By the end of the programme the objective is to be trading or on course to be trading a
six-figure trading account. Once you are funded, we believe in taking a low-risk
approach to trading in order to ensure that you can grow your account steadily and
never risk losing it. With modest risk a target of 5% a month is very much achievable
which for most people would be enough to live on. To earn more you can simply apply
for more funding rather than increasing the risk. This will ensure that you are never
under too much pressure to perform and will allow you to be on the path of making
trading your biggest or main source of income.
          </DescriptionContainer>
          <IntroTitle style={{fontSize: "24px", marginTop: "20px"}}>
          Next Steps
        </IntroTitle>
          <DescriptionContainer style={{fontSize: "14px", color: "#4B586A", marginTop: "10px"}}>
          If you think this programme might be what you are looking for then click the apply
button below where you will be taken to an application page. Here you must complete
the form and book a time to speak with one of the trading team to discover whether
you are going to be a good fit for the programme.
          </DescriptionContainer>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button onClick={initCalendly}
            style={{fontSize:"16px", marginTop: "25px"}}>Apply Now</Button>
        </div>
    </>
    )
}

const IndexPage = () => {

    const initCalendly = () => {
        window.Calendly.initPopupWidget({
           url: 'https://link.elite360.io/widget/bookings/lti-strategy-call',
       });
     }
    return (
        <Layout title={"Elite Trader Programme — One-to-One Mentorship"} description={"One-to-one trading mentorship with the London Trading Institute team for traders who want personalised, structured guidance to trade professionally."}>
            <IntroCardCoursePage title={'Elite Trader Programme (one-to-one)'} img={atp}
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
