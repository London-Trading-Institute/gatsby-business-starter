import React, { useState } from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, ButtonSecondary } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import Form from '../Form/Form';
import { CourseSchema } from '../StructuredData';

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = ({title, description, img}) => {
    const [email, setEmail] = useState(0, "")
    const [show, toggleModal] = useState(1)
    
    const submitLead = () => {
        axios.post(
            `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?email=${email}`,
            email,
            {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        );
        toggleModal(show+1);
    }
    const initCalendly = () => {
         window.Calendly.initPopupWidget({
            url: 'https://link.elite360.io/widget/bookings/lti-strategy-call',
        });
      }
    return (
        <>
        <CourseSchema name={title} description={description} />
        <Form emailInput={email} showInput={show} isCourse={true}/>
        <IntroCardContainer>
            <IntroLeftContainerHeader>
                <div>
                    <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "10px"}}>
                        {title}
                    </IntroTitle>
                    <DescriptionContainer style={{marginBottom: "10px", fontSize: "14px"}}>
                        {description}
                    </DescriptionContainer>
                    <div style={{display: "flex"}}>
                        <InputField onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email"></InputField>
                        <ButtonSecondary style={{height: "50px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}} onClick={submitLead}>SUBMIT</ButtonSecondary>
                    </div>
                    <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                        {'Join our community and access our FREE Daily Matarial'}
                    </DescriptionContainer>
                    <Button onClick={initCalendly}
                    style={{fontSize:"16px", marginTop: "25px"}}>Book A Free Strategy Call</Button>
                </div>
            </IntroLeftContainerHeader>
            <IntroLeftContainer className="" style={{flexBasis: "50%"}}>
                <div style={{width: "100%"}}>
                    <img
                        src={img?img:landing}
                        style={{width: "100%", maxHeight: "480px", objectFit: img?"fill":"contain", objectPosition: "top right"}}
                        >
                    </img>
                </div>
            </IntroLeftContainer>
        </IntroCardContainer>
        </>
    )
}

export default IntroCard
