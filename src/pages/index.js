import React from 'react'
import {IntroCard, About, Layout, Courses,Testimonial, Booking } from '../components'
import Content from './content/home.json'

const IndexPage = () => {
    return (
        <Layout title={"Professional Trading Courses & Mentorship"} description={"London Trading Institute provides professional trading education, one-to-one mentorship and systematic trading programmes across forex, crypto and options — built on testing, evidence and risk management."}>
            <IntroCard data = {Content.introCard}/>
            <Courses/>
            <About/>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
