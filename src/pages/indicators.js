import React, {useState} from 'react'
import {Layout, Courses,Testimonial, Booking, IntroCardIndicatorPage } from '../components'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from '../components/ContactForm/ContactForm.elements'
import { Button } from '../components/Courses/Courses.elements'
import { Card, Header, Underline, Modal, ModalContainer, RDiv } from '../globalStyles'
import Content from './content/home.json'
import axios from 'axios';
import { Banner } from '../components/About/About.element'

// const Form = ({open}) => {
//   const [show, toggleModal]  = useState(open)
//   const [email, setEmail]  = useState()
//   const [name, setName]  = useState()
//   const submitLead = () => {
//     axios.post(
//         "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
//         email,
//         {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
//     );
//     toggleModal(false);
//   }

//     return (
//       show && <ModalContainer>
//         <Modal>
//           <FormContainer>
//               <ContactLabel>
//                 Get 14 Day Trial
//               </ContactLabel>
//               <InputContainer>
//                   <Label>
//                       Name
//                   </Label>
//                   <InputField onChange={(e)=>{setName(e.target.value)}} id="name"/>
//               </InputContainer>
//               <InputContainer>
//                   <Label>
//                       Email
//                   </Label>
//                   <InputField onChange={(e)=>{setEmail(e.target.value)}} id="email"/>
//               </InputContainer>
//               <Button style={{fontSize: "30px"}} onClick={submitLead}>Send Indicators</Button>
//           </FormContainer>
//         </Modal>
//     </ModalContainer>
//     )
// }


const IndexPage = () => {
  const [show, toggleModal]  = useState(false)
  const [email, setEmail]  = useState()
  const [name, setName]  = useState()
  const [mobile, setMobile]  = useState()
  const submitLead = () => {
    axios.post(
      `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?course=${'none'}&email=${email}&name=${name}&mobile=${mobile}`,
      email,
      {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    );
    axios.post(
        `https://hooks.zapier.com/hooks/catch/2431386/oznxxo0?email=${email}&name=${name}&mobile=${mobile}`,
        email,
        {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    );
    toggleModal(false);
  }

    return (
        <Layout title={"Pro FX Trading Indicators"} description={"London Trading Institute's Pro FX indicators are designed to support more consistent, rule-based trading decisions. Download a free trial."}>
               { show && <ModalContainer>
                <Modal>
                <span style={{display: show? '' :"none",textAlign: "right", margin: "15px", fontSize: "20px", cursor: "pointer", color: "grey"}}
            onClick={()=>{toggleModal(false)}}>&#x2715;</span>
                  <FormContainer>
                      <ContactLabel>
                        Get 14 Day Trial
                      </ContactLabel>
                      <InputContainer>
                          <Label>
                              Name
                          </Label>
                          <InputField onChange={(e)=>{setName(e.target.value)}} id="name"/>
                      </InputContainer>
                      <InputContainer>
                          <Label>
                              Email
                          </Label>
                          <InputField onChange={(e)=>{setEmail(e.target.value)}} id="email"/>
                      </InputContainer>
                      <InputContainer>
                          <Label>
                              Mobile
                          </Label>
                          <InputField type="number" onChange={(e)=>{setMobile(e.target.value)}} id="mobile"/>
                      </InputContainer>
                      <Button style={{fontSize: "30px"}} onClick={submitLead}>Send Indicators</Button>
                  </FormContainer>
                  {/* <div id="eliteFormIntro"></div>
                  <iframe src="https://link.elite360.io/widget/form/rRQbBvnftypR87rftR4F" style="border:none;width:100%;" scrolling="no" id="rRQbBvnftypR87rftR4F"></iframe> */}
                </Modal>
            </ModalContainer>}
            <IntroCardIndicatorPage data={Content.introCard}/>
            <Banner style={{alignItems: "center", display: "flex", flexDirection: "column", padding: "30px 20px"}}>
            <div style={{maxWidth: "500px"}}>
              Become a more consistent trader in less time!
            </div>
            <div style={{fontSize: "18px",  marginTop: "10px"}}>
              Invest In Your Success!
            </div>
            <Button onClick={()=>toggleModal(true)} style={{marginTop:"20px" ,padding: "10px 20px", fontSize: "20px"}}>
              Download Free Trial
            </Button>
          </Banner>
            <Header className="font-mobile" style={{backgroundColor: "#F7F9FF"}}>
                  <div>
                      <div>
                          Essential Trading Tools
                      </div>
                      <Underline/>
                  </div>
            </Header>
            <RDiv style={{paddingBottom: "100px", paddingTop: "1px"}}>
              <Card>
                  <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <iframe className="yt-video" src="https://www.youtube.com/embed/4M4fadtAJhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                        Daily Trading Range (DTR)
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                      Use this to accurately predict the high and low of the day with great precision.<br/><br/>
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                      Too often in trading, we’ve seen traders go for unrealistic targets. That is, targets that are outside the daily trading ranges of individual currency pairs.Understanding the daily trading range and its impact on currencies has vastly improved our trading performance – so we’ve set about to creating an indicator that would help you do the same.<br/><br/>
                      The Daily Trading Range indicator allows you to identify the predicted high and low of the day. Any position can be modelled to remain within these parameters as targets outside this range have a much lower probability of success.This software is perfect for matching significant daily levels and finding levels of confluence and is an invaluable tool for drastically enhancing performance.
                    </div>
                    <Button onClick={()=>toggleModal(true)} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px"}}>
                      Download Free Trial
                    </Button>
                  </div>
              </Card>
              <Card>
                <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <iframe className="yt-video" src="https://www.youtube.com/embed/s3Gw_QKCqBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                      Automatic Trend Lines
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                      Drawing the correct trendlines is essential to trading. Use our auto trendline tool to avoid costly mistakes.<br/><br/>
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                      Trend lines are essential to identifying trend direction and momentum. Drawn correctly, they can also be extremely powerful tools for knowing when to get in the market, as well as when to get out. Drawing them incorrectly can be disastrous!.<br/><br/>
                      Never again will you have to question whether your trend line was drawn correctly with this tool. We have designed this tool to automatically detect trends for you — it will even plot the lines with 100% accuracy every time, leaving you free of doubt when identifying overall trends and even, identifying entry and exit points.
                    </div>
                    <Button onClick={()=>toggleModal(true)} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px"}}>
                      Download Free Trial
                    </Button>
                  </div>
              </Card>
              <Card>
              <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <iframe className="yt-video" src="https://www.youtube.com/embed/gj0L6P004Yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                      Auto Fibonacci
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                      An advance automation tool to plot the ABCD market waves for you with predictable entries and matching profit targets.<br/><br/>
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    Based on an advanced Fibonacci pattern, this system enhances the Fibonacci pattern from being just an indicator, to being a complete stand-alone strategy in its own right. This strategy has been programmed to highlight exact market swings and areas in which trades are more likely to reach a specific price level.<br/><br/>
                    The software automatically loads the Fibonacci swings on to any time frame allowing you to see the market’s exact position in terms of retracement/extension, which enables you to quickly reach a decision. This provides precise target and stop areas and can be combined with other technical tools to further increase their effectiveness. It is available as both a manual and automated indicator.
                    </div>
                    <Button onClick={()=>toggleModal(true)} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px"}}>
                      Download Free Trial
                    </Button>
                  </div>
              </Card>
              <Card>
              <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <iframe className="yt-video" src="https://www.youtube.com/embed/Cvx8gAlzSuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                      {`Supply & Demand Zones`}
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                      Use the same trading levels that institutions use so you are always trading off the best information.<br/><br/>                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                      This indicator is phenomenal – it will enable you to slash the time it takes for identifying key levels of support and resistance on your charts. Markets consistently react to these levels, and knowing where they are is a vital component of success.<br/><br/>
                      Knowing where they are automatically, without any effort or input – now that’s PRICELESS!. With key levels drawn in for you, your main focus will shift from how to find a trade, to how to manage the trade instead.
                    </div>
                    <Button onClick={()=>toggleModal(true)} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px"}}>
                      Download Free Trial
                    </Button>
                  </div>
              </Card>
              <Card>
              <div style={{flexBasis: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <iframe className="yt-video" src="https://www.youtube.com/embed/Cvx8gAlzSuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "10px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                      {`Position Risk Manager`}
                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#172647"}}>
                      An intuitive tool that helps you manage risk on your position and calculate the position size for you based on your appetite.<br/><br/>                    </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                      This indicator is very intuitive – it will enable you to slash the time it takes for identifying your position size and risk to reward ratio, without much effort, allowing you to focus on your trade setup instead. Use sensible Risk to Reward ratios and leave the calculation to this Tool.
                    </div>
                    <Button onClick={()=>toggleModal(true)} style={{marginTop: "20px", padding: "5px 10px", fontSize: "20px"}}>
                      Download Free Trial
                    </Button>
                  </div>
              </Card>
            </RDiv>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
