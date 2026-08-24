import React from 'react'
import { Banner, CoursesContainer, Header, Button, CourseItem } from './Courses.elements'
import { FlexContainer, Underline } from '../../globalStyles'
import time from '../../img/time.jpg'
import learn from '../../img/learn.jpg'
import { navigate } from 'gatsby'
import clp from '../../img/clp.jpg'
import atp from '../../img/atp1.jpg'
import clpt from '../../img/clpt.jpg'
import intro from '../../img/intro.jpg'
import etp from '../../img/etp.png'
import asc from '../../img/algorithms.jpg'

const Course = ({title, duration, img, page, difficulty, crypto, small}) => {
    return (
        <CourseItem onClick={()=>navigate(page)}>
            <div style={{height: "185px"}}>
                <img
                    src={img}
                    alt="course"
                    height={small?"85%":"100%"}
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

const Courses = (props) => {
    return (
        <CoursesContainer>
            <Banner>
                Learn what it really takes to become a Professional Trader and you’ll begin to see the markets on a whole new level.
            </Banner>
            <div style={{padding: "10px 7% 70px"}}>
                <Header style={{display: "flex"}}>
                    <div>
                        <div>
                            Our Popular Courses
                        </div>
                        <Underline width={10}/>
                    </div>
                    <Button onClick={()=> navigate('/courses')}>
                        ALL COURSES
                    </Button>
                </Header>
                <FlexContainer>
                    <Course title="Free Introductory Course" page={'/intro-forex-course'} img={intro} duration={"1 month"}/>
                    <Course
                        title="Auto Strategy Club"
                        img={asc}
                        duration={"Ongoing"}
                        difficulty={"All levels"}
                        page={'/auto-strategy-club'}
                    />
                    <Course title="Elite Trader Programme (one-to-one)" img={etp} page={'/elite-trader-programme'} small={true} duration={"4 months"} difficulty={"intermediate"}/>
                        {/*<Course 
                        title="Crypto Like a Pro Investing"
                        duration={"6 months"}
                        img={clp}
                        page={'/crypto-like-a-pro'}
                        crypto
                    />*/}
                </FlexContainer>
                <FlexContainer>
                        {/*<Course title="Crypto Like a Pro Trading System" img={clpt} page={'/crypto-like-a-pro-system'} duration={"3 months"} crypto/>*/}
                    {/* <Course title="Algorithms" img={algo} duration={"1 month"} difficulty={"intermediate"}/>
                    <Course title="Advanced Forex" img={atp1} duration={"1 month"} difficulty={"intermediate"}/> */}
                </FlexContainer>
                {/* <FlexContainer>
                    <Course title="Options" img={options} duration={"3 months"} difficulty={"intermediate"}/>
                </FlexContainer> */}
            </div>
        </CoursesContainer>
    )
}

export default Courses
