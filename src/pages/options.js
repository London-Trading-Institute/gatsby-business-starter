import React from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/alberto1.png'
import options from '../img/options.jpg'

const Mentors = () => {
    return(
        <FlexContainer style={{padding: "0px 40px"}}>
            <img
                style={{borderRadius: "6px"}}
                src={andy1}
                height={200}
            >
            </img>
            <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{flexDirection: "column", marginLeft: "20px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                        Alberto Pallotta
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        Founder & Senior Quantitative Trader
                        <br/>
                        <br/>
                      </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    Alberto started his trading career within the financial industry 17 years ago, beginning by trading stocks; through his tenure in the industry he has achieved some incredible feats. Alberto is an engineering graduate, possessing a Masters in Financial Mathematics, and is a Fitch Certified Quant.
                    </div>
                  </div>
            </div>
        </FlexContainer>
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
            This course covers the principles of Options Trading in a comprehensive and unique manner, including a look at both the theoretical and practical aspects.<br/>
            As with all our programmes, flexible learning is essential. That’s why we offer you the opportunity to learn options trading directly on our London Trading Floor, or online. <br/><br/>
            The programme was created and is taught directly by Alberto Pallotta, our Senior Quantitative Trader. A seasoned professional with a verified track record in options trading and a multitude of accolades and qualifications, Alberto brings with him years of experience, expertise, and cutting-edge options trading know-how. He makes it look easy – and by the time you’ve finished going through his course, you’ll be the one making it look easy!<br/><br/>
            Why is this important? Well there is a lot of mis-sold information on the internet from people claiming you can win 90% of your trades using options trading strategies such as trading credit spreads. Of course, this is not necessarily completely incorrect, but what they fail to teach you is that when it finally doesn’t work you will lose all your money.<br/><br/>
            If you are looking for a professional options trading course in London or online, you have come to the right place.<br/>
            We only teach you options trading strategies that we trade ourselves. Our focus is on helping you understand the risks involved as well as the opportunities available using options versus trading the underlying.<br/><br/>
            There are no magic pills or get-rich-quick methods that really work, but there are tools that only very few sophisticated professional investors/traders use, which can give you a big competitive edge over others.<br/><br/> The aim of the course is to provide a thorough education on Options Theory which is an absolute necessity if one wants to excel in Options Trading. The delegate will be able to build their own trading strategies utilising options and will be provided with our tested strategies to use as a starting point.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
              Why this course ?
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Most option courses do not teach the theoretical aspects of option pricing and trading. They only teach you how to place orders in accordance to pre-built strategies, without the student understanding why they work.<br/><br/>
            In this course we provide students with a strong foundation of the theoretical elements, as such the student will be able to understand why the strategies they will be using work, how they are built, and most importantly, they will have the capability to develop new strategies. We stress that it is not possible to achieve this without a strong theoretical background; hence it is a core tenant of this course.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
              How will the course be taught ?
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "20px"}}>
              <Bullet/> Every week, the students study the pre-recorded video modules through our innovative online learning portal
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> Assignments and exercises will be provided and reviewed
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> Every Friday for 3 months, there is a 1-hour session including: market commentary, question and answer, reviewing exercises, and live trading
            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
        Why should you listen to Alberto?
        </CourseBanner>
        <div style={{padding: "0px 40px", marginTop: "30px"}}>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Alberto has been in the financial industry for more than 17 years. In that time, he has achieved some incredible feats. Here are just a few of the highlights of his experience in the industry:
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "30px"}}>
              <Bullet/> He possesses over 17 years of professional trading experience.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> He is regularly invited to speak in financial markets and economics lectures in major UK universities, including Middlesex University, University of Warwick, London Metropolitan University.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> He is a Fitch-Certified Quant and, unlike most, he is among the few who can prove it.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> He acts as an institutional advisor for two London-based Hedge Funds
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/> He is involved in extensive research projects, investigating the feasibility of using Artificial Intelligence in trading.
            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
        Will the course be interactive?
        </CourseBanner>
        <div style={{padding: "0px 40px", marginTop: "30px"}}>
        <DescriptionContainer  style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
        Yes. You can ask questions at any point during the course, and this is encouraged. Interactivity is the central reason as to why this course is limited to 10 applicants at a time, so we can ensure each one of our students is getting the best education and attention possible.
        </DescriptionContainer>
        <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
        Are there any other courses that I will be required to purchase?
        </IntroTitle>
        <DescriptionContainer  style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
        Absolutely not. This course is completely comprehensive. Once you complete the course you will have a refined and practical skill set, ready to be applied to the markets directly; you will not be required to purchase another course to gain the desired knowledge.
        </DescriptionContainer>
        <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
        Why Learn Options?
        </IntroTitle>
        <DescriptionContainer  style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
        Options trading allows you to take control of an asset – like a stock – but for a fraction of the cost without ever having to buy it. Instead of investing all your capital into owning something, you can simply take control of it and benefit from any movement in your direction whilst limiting your risk.<br/><br/>
        Unlike traditional markets such as FX, there are also options trading strategies where you can benefit from other factors such as an increase or decrease in volatility. This makes options trading a much more sophisticated and powerful tool.<br/><br/>
        Trading options without the correct knowledge can also be very dangerous, as there can be a lot of complexity when you don’t understand the mechanics. For example, it is much easier to buy a stock where if it goes up you make money, or when it goes down you lose money.
        </DescriptionContainer>
        <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
        Trading Options has More Ways to Win Than any Other Securities!
        </IntroTitle>
        <DescriptionContainer  style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
        Options offer a much more powerful solution where you can make money even if the market doesn’t move. Or even if you are wrong on direction there are some options trading strategies you can use that allow you to profit when you are wrong.
        </DescriptionContainer>
        </div>
    </>
    )
}

const IndexPage = () => {
    return (
        <Layout title={"Options Trading Course"} description={"Learn options theory and how to build options trading strategies for different market conditions with London Trading Institute."}>
            <IntroCardCoursePage img={options} title={'Options'} description={'Learn Options theory and build trading strategies for all market conditions'}/>
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
