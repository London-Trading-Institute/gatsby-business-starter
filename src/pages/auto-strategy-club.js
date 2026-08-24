import React from 'react'
import { Layout, Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'
import asc from '../img/algorithms.jpg'

const Mentors = () => {
    return (
        <FlexContainer style={{ padding: "0px 40px" }}>
            <img
                style={{ borderRadius: "6px" }}
                src={andy1}
                height={180}
                alt="Andy Demi"
            >
            </img>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ flexDirection: "column", marginLeft: "20px", flexBasis: "70%", padding: "10px" }}>
                    <div style={{ fontSize: "24px", padding: "12px 0px" }}>
                        Andy Demi
                    </div>
                    <div style={{ fontSize: "14px", color: "#FFAB00" }}>
                        Founder &amp; Head Trader
                        <br />
                        <br />
                    </div>
                    <div style={{ fontSize: "14px", padding: "0px 0px", color: "#4B586A", fontWeight: "normal" }}>
                        Andy leads the London Trading Institute strategy development team and heads up Auto Strategy Club. His focus is systematic, evidence-based trading — turning trading ideas into clearly defined, testable rules, managing risk, and using automation to execute strategies consistently rather than relying on emotion or guesswork.
                    </div>
                </div>
            </div>
        </FlexContainer>
    )
}

const OverView = () => {
    return (
        <>
            <div style={{ padding: "0px 40px" }}>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    Auto Strategy Club is for traders who want to take a more systematic approach to trading.<br /><br />
                    Instead of relying purely on judgement, emotion or what looks good on a chart, we help you turn trading ideas into clear rules that can be tested against historical data.<br /><br />
                    You can then analyse the results, make changes, forward test the strategy and, when appropriate, automate it.
                </DescriptionContainer>
            </div>

            <CourseBanner style={{ padding: "20px 20px" }}>
                You do not need any coding experience.
            </CourseBanner>

            <div style={{ padding: "0px 40px", marginTop: "30px" }}>
                <IntroTitle style={{ fontSize: "28px" }}>
                    What is Auto Strategy Club?
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    Most traders have ideas they believe work. It might be a particular setup, an indicator, a certain time of day or something they have been trading manually for years.<br /><br />
                    The problem is knowing whether the idea genuinely has an edge. Auto Strategy Club gives you a way to test that.<br /><br />
                    We help members take an idea and turn it into something that can be measured properly. You can see how it has performed historically, how much drawdown it experienced, how often it traded, how it behaved in different market conditions and whether the results still hold up after realistic trading costs are taken into account.<br /><br />
                    The aim is to make decisions based on evidence rather than guesswork.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    You don’t need to be a programmer
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    One of the main reasons traders never explore automated or systematic trading is because they assume they need to know how to code. You don’t.<br /><br />
                    The technology we use allows us to take trading logic and turn it into something that can be tested and automated without members having to learn a programming language.<br /><br />
                    Your job is to understand the trading idea. We help with the process of defining it, testing it and putting the technology around it.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    Test your own trading ideas
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    If you already have a strategy or an idea you want to explore, Auto Strategy Club gives you a framework for testing it properly.<br /><br />
                    For example, you might want to know whether changing a stop loss improves the results, whether a strategy performs better during certain trading sessions or whether it only worked during one particular period in the market.<br /><br />
                    You can also look at things such as win rate, profit factor, drawdown, number of trades and how consistently a strategy has performed over time.<br /><br />
                    This often gives traders a very different view of a strategy from simply looking back at a chart and picking out the trades that worked.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    Learn how systematic trading actually works
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    Auto Strategy Club isn’t simply a collection of trading bots. A big part of what we do is helping members understand how trading systems are built and tested.<br /><br />
                    That includes backtesting, optimisation, forward testing, risk management, execution, slippage and understanding when a backtest may be giving you a misleading picture.<br /><br />
                    Members can follow the strategies we are developing, see how we test them and apply the same process to their own ideas.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    Access strategies developed by the LTI team
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    We are continually researching and testing trading strategies across different markets. When we find something we believe is worth developing further, members get to see that process.<br /><br />
                    Some ideas won’t make it through testing. Others may be refined several times before we are comfortable using them. We think that is important.<br /><br />
                    The aim isn’t to produce as many systems as possible. It is to find strategies with sensible logic and evidence behind them.<br /><br />
                    Members also receive access to selected automated strategies and tools developed by the London Trading Institute team.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    From TradingView to automated execution
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    Many of the strategies we research are initially developed and tested in TradingView. Where suitable, they can then be connected to supported MT4 or MT5 trading accounts through our automation technology.<br /><br />
                    Once a strategy has clearly defined rules, the system can monitor the market and execute qualifying trades automatically. That means you do not have to sit in front of a chart waiting for every setup.<br /><br />
                    Automation does not remove trading risk and it does not mean a strategy will always be profitable. What it can do is make sure a clearly defined strategy is executed consistently.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    Understand the numbers before risking money
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    One of the biggest benefits of testing a strategy is being able to see what you may be dealing with before you trade it with real money.
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    <Bullet /> How often does it lose?
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    <Bullet /> What has the historical drawdown been?
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    <Bullet /> How many losing trades have occurred in a row?
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    <Bullet /> Does it perform consistently across different periods?
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    <Bullet /> What happens when trading costs and slippage are included?
                </DescriptionContainer>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "20px" }}>
                    These are all things we look at when developing a system. A good looking profit figure on its own doesn’t tell you very much.
                </DescriptionContainer>
            </div>

            <CourseBanner style={{ padding: "20px 20px" }}>
                Who is Auto Strategy Club for?
            </CourseBanner>

            <div style={{ padding: "0px 40px", marginTop: "30px" }}>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px" }}>
                    Auto Strategy Club is suitable for traders who want to become more systematic in the way they trade.<br /><br />
                    You may already have trading experience and want to test your own ideas. You may be interested in automation but have no idea where to start. Or you may simply want to move away from constantly watching charts and making every trading decision manually.<br /><br />
                    You don’t need to be highly technical, but you should have an interest in understanding why a strategy works rather than simply being given something to trade without knowing anything about it.
                </DescriptionContainer>

                <IntroTitle style={{ fontSize: "28px", marginTop: "30px" }}>
                    About London Trading Institute
                </IntroTitle>
                <DescriptionContainer style={{ fontSize: "16px", color: "#4B586A", marginTop: "10px", marginBottom: "40px" }}>
                    Auto Strategy Club is part of London Trading Institute and is led by Andy Demi and the LTI strategy development team. Our experience in the markets is combined with testing, automation and technology to develop trading systems in a structured way.<br /><br />
                    We don’t expect every trading idea to work. Testing is there to find that out. Sometimes the best result of a backtest is discovering that an idea isn’t good enough before risking any money on it.
                </DescriptionContainer>
            </div>
        </>
    )
}

const IndexPage = () => {
    return (
        <Layout>
            <IntroCardCoursePage
                img={asc}
                title={'Auto Strategy Club'}
                description={'Build, test and automate trading strategies without coding'}
            />
            <CourseItem
                mentors={<Mentors />}
                overview={<OverView />}
            >
            </CourseItem>
            <Testimonial />
            <Booking />
            <div id="widget" style={{ display: "flex", justifyContent: "center", marginTop: "60px" }} />
        </Layout>
    )
}

export default IndexPage
