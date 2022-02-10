import React from 'react'
import {IntroCardEventsPage, About, Layout, CourseList,Testimonial, Booking, IntroCardCoursesPage } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import time from '../img/time.jpg'
import learn from '../img/learn.jpg'
import { navigate } from 'gatsby'
import { DescriptionContainer, FeatureItemLarge, IntroTitle } from '../components/IntroCard/IntroCard.element';
import clp from '../img/clp.jpg'
import atp from '../img/atp1.jpg'
import atp1 from '../img/atpp.jpg'
import clpt from '../img/clpt.jpg'
import algo from '../img/algorithms.jpg'
import options from '../img/options.jpg'
import intro from '../img/intro.jpg'
import { CourseItem } from '../components/Courses/Courses.elements';

const Course = ({title, duration, img, page, difficulty, crypto}) => {
  return (
      <CourseItem onClick={()=>navigate(page)}>
          <div style={{height: "185px"}}>
              <img
                  src={img}
                  alt="course"
                  height={"100%"}
              >
              </img>
          </div>
          <div style={{padding: "12px 0px"}}>
              {title}
          </div>
          <div style={{width: "100%", margin: "4px 0px", border: "1px solid #8790A524"}}/>
          <div style={{display: "flex", justifyContent: "flex-start", padding: "12px 0px"}}>
              <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                  <img 
                      src={time}
                      height={15}
                  >
                  </img>
                  <div style={{fontSize: "13px", marginLeft: "5px"}}>{duration}</div>
              </div>
              <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                  <img 
                      src={learn}
                      height={15}
                  >
                  </img>
                  <div style={{fontSize: "13px", marginLeft: "5px"}}>{difficulty?difficulty:'Beginner'}</div>
              </div>
              <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                    <div style={{fontSize: "11px", marginLeft: "5px", color: "white", background: "#FFAB00", padding: "2px 5px", borderRadius: "6px"}}>{crypto?'CRYPTO':'FOREX'}</div>
                </div>
          </div>
      </CourseItem>
  )
}

const Beginner = () => {
  return (
    <>
      <FlexContainer>
        <Course 
            title="Crypto Like a Pro Investing"
            duration={"6 months"}
            img={clp}
            page={'/crypto-like-a-pro'}
            crypto
        />
        <Course 
            title="Associate Trader Programme"
            img={atp}
            duration={"3 months"}
            page={'/associate-trader-programme'}
        />
        <Course title="Free Introductory Course" page={'/intro-forex-course'} img={intro} duration={"1 month"}/>
        <Course title="Crypto Like a Pro Trading System" img={clpt} page={'/crypto-like-a-pro-system'} duration={"3 months"} crypto/>
      </FlexContainer>
    </>
  )
}

const Intermediate = () => {
  return(
    <>
      <FlexContainer>
          <Course title="Algorithmic Trading Course" img={algo} duration={"3 months"} page={'/algorithms'} difficulty={"intermediate"}/>
          <Course title="Advanced Forex" img={atp1} page={'/advanced-forex'} duration={"1 month"} difficulty={"intermediate"}/>
          <Course title="Options Trading Course" img={options} page={'/options'} duration={"3 months"} difficulty={"intermediate"}/>
      </FlexContainer>
    </>
  )
}

const All = () => {
  return (
    <>
                <FlexContainer>
                <Course title="Free Introductory Course" page={'/intro-forex-course'} img={intro} duration={"1 month"}/>
                <Course 
                    title="Associate Trader Programme"
                    img={atp}
                    duration={"3 months"}
                    page={'/associate-trader-programme'}
                />
                    <Course 
                        title="Crypto Like a Pro Investing"
                        duration={"6 months"}
                        img={clp}
                        page={'/crypto-like-a-pro'}
                        crypto
                    />
                </FlexContainer>
                <FlexContainer>
                    <Course title="Crypto Like a Pro Trading System" img={clpt} page={'/crypto-like-a-pro-system'} duration={"3 months"} crypto/>
                    <Course title="Algorithmic Trading Course" img={algo} duration={"3 months"} page={'/algorithms'} difficulty={"intermediate"}/>
                    <Course title="Advanced Forex" img={atp1} page={'/advanced-forex'} duration={"1 month"} difficulty={"intermediate"}/>
                </FlexContainer>
                <FlexContainer>
                    <Course title="Options Trading Course" img={options} page={'/options'} duration={"3 months"} difficulty={"intermediate"}/>
                </FlexContainer>
    </>
  )
}

const AboutPage = () => {
    return (
        <Layout>
            <IntroCardCoursesPage/>
             <CourseList
                all={<All/>}
                beginner={<Beginner/>}
                intermediate = {<Intermediate/>}
              />
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
