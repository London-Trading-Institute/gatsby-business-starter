import React from 'react'
import {IntroCardAboutPage, About, Layout, Courses, Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';

const BulletT = ({children}) => {
console.log('a',children)
  return (
  <div style={{display: "flex", fontWeight: "normal"}}>
    <div>
    <Bullet></Bullet>
    </div>
    {children}
    </div>
  )

}

const AboutPage = () => {
    return (
        <Layout title={"Refund Policy & Terms"} description={"London Trading Institute's refund policy, terms and conditions."}>
            <div style={{backgroundColor: "#F7F9FF", padding: "30px 5%"}}>
              <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                <IntroTitle style={{marginBottom: "20px", textAlign: "center"}}>
                TERMS AND CONDITIONS OF SERVICE  
                </IntroTitle>
                <Underline></Underline>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                All course materials, tools, and ancillary content purchased will be delivered in digital form, unless otherwise  stipulated or promised prior to the course start date.
                <br/><br/>Risk Warning! All content on londontradinginstitute.com and content communicated in email correspondence,  webinars, seminars, or other events, is intended for educational purposes only and should not be considered as  investment advice, nor should it be construed as a replacement for investment advice from Qualified Financial  Advisors. London Trading Institute, its directors, management, traders, instructors and coaches will not be held  
                responsible for any losses incurred by the client
                <br/><br/>All information provided by londontradinginstitute.com, London Traders Institute and its contractors is general  advice and the client will use to apply this general advice and trade at their own risk. London Trading Institute  35 New Broad Street London EC2M 1NH +44 (0)20 3887 7398 www.londontradinginstitute.com.
                <br/><br/>While our trade ideas, from our wider understanding of and experience from trading the financial markets hold  merit, they do not guarantee success or profit and you should not undertake the act of trading them unless you  are fully aware of risk management and how to place an order with the broker correctly.
                <br/><br/>Users should understand that past performance is not indicative of future results, and that the value of  investments and income from them may go up as well as down and are not guaranteed.  You may lose the entire amount invested. With some leveraged investments such as spread bets and CFDs, your  losses may potentially be unlimited.  

                </DescriptionContainer>
              </div>
              <AboutContainerAboutPage style={{position: "static", margin: "0px 0px"}}>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          INTELLECTUAL PROPERTY AND PROPRIETARY INFORMATION 
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                You acknowledge and understand that LTI has invested a substantial amount of time and effort, and has  incurred substantial costs, in developing its Proprietary Information. LTI’s Proprietary Information is not in the  public domain and reasonable steps are continuously taken to ensure that this Proprietary Information remains  secret.
                <br/><br/> The term “Proprietary Information” shall mean trade secrets, confidential knowledge, data or any other  proprietary information of LTI. This Proprietary Information is protected under The Trade Secrets  (Enforcement, etc.) Regulations 2018. By way of illustration but not limitation, “Proprietary Information”  includes trade secrets, inventions, ideas, patterns, processes, formulas, trading methods, source and object codes,  data, programmes, compilations, written training course materials, know-how, improvements, discoveries,  publications, developments, educational courses, designs and techniques, information regarding plans for  research, development, new products, marketing and selling materials and methods, business plans, budgets and  unpublished financial statements, licenses, methods of operations, prices and costs, business practices, customer  sources and lists, and suppliers. LTI derives economic value, both actual and potential, from not having its  Proprietary Information generally known or ascertainable by other persons who can obtain economic value from  its unauthorized disclosure or use. Such Proprietary Information may not be used, reproduced, or disclosed to  any other parties for any other purpose without the expressed written permission of LTI. Specifically, you agree  that you shall not for any reason, at any time, without the written consent of LTI, disclose to any person or entity  any of LTI’s Proprietary Information.  
                <br/><br/>Intellectual Property, londontradinginstitute.com, including but not limited to text, content, photographs,  video, audio and graphics, and goods (the “Service”), is protected by copyrights, trademarks, service marks,  international treaties, and/or other proprietary rights and laws of the United Kingdom and other countries. The  Service is also protected as a collective work or completion under International copyright and other laws and  treaties. All individual articles, columns and other elements making up the Service are also copyrighted works.  

                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          ACCURACY OF INFORMATION
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                The content on this website is subject to change at any time without notice and is provided for the sole purpose  of assisting clients to make independent decisions regarding their interest in LTI’s products and the Forex  market.
                <br/><br/>LTI has taken reasonable measures to ensure the accuracy of the information on this website, however,  does not guarantee its accuracy, and will not accept liability for any loss or damage which may arise directly or indirectly from the content or your inability to access the website, for any delay in or failure of the transmission  or the receipt of any instruction or notifications sent through this website or distributed through other means.
                <br/><br/>There are no explicit or implicit warranties of accuracy or timeliness made by LTI or its affiliates.  These same provisions apply to any and all educational products and services, trading systems, indicators, tools,  publications, blog posts, opinion pieces, or any other material provided in connection with the same.  
                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          DISCLAIMER OF WARRANTY
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                London Trading Institute 35 New Broad Street London EC2M 1NH +44  (0)20 3887 7398 www.londontradinginstitute.com edu.londontradinginstitute.com 
ANY AND ALL INFORMATION PROVIDED BY LTI OR DERIVED FROM LTI’S WEBSITES IS  PROVIDED “AS IS” AND LTI MAKES NO WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,  INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY OR FITNESS  FOR A PARTICULAR PURPOSE. 

                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          DISTRIBUTION  
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                This site is not intended for distribution, or use by, any person in any country where such distribution or use  would be contrary to local law or regulation. None of the services or investments referred to on this website are  available to persons residing in any country where the provision of such services or investments would be  contrary to local law or regulation. It is the responsibility of visitors to this website to ascertain the terms of their  own country of residence and comply with any local law or regulation to which they are subject.  
                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          THIRD PARTY  
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                Any links provided or referenced to other websites are offered as a matter of convenience and in no way are  meant to imply that LTI endorses, sponsors, promotes or is affiliated with the owners of or participants in those  sites, or endorses or warrants any information contained on those sites, unless expressly stated. LTI does not  endorse, guarantee or warranty any third-party products advertised on its site, in its promotional materials, or  otherwise referenced in any information provided by LTI or derived from LTI’s website, and LTI expressly  disclaims any responsibility and accepts no liability with respect to such information and products. LTI may  receive a fee from a service provider that has a link or advertisement on LTI’s website or is referenced in the  information provided by LTI.  
                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          PAYMENT TERMS AND LTI’S AFFORDABLE EDUCATION SCHEME™ 
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                London Trading Institute are committed to helping as many aspiring traders and investors access our educational  programmes and services. We understand that money often is the barrier, and in most cases is the ONLY barrier,  between you and pursuit of your educational goals and objectives. To that end, LTI have established the  Affordable Education Scheme™ (“AES”), which allows for the user to compensate LTI for the products and  services provided over a period of time, rather than in one lump sum.
                <br/>
                <br/>Your individualized payment plan agreed between you and LTI, notwithstanding any other provision stipulated  herein or provided elsewhere, is governed by the following terms and conditions:  
                <br/><br/><BulletT>The MINIMUM deposit required to access any of LTI’s programmes, products, services, or materials is 40%  of the total costs/fees agreed. No access will be granted, under ANY circumstance, prior to satisfaction of the  minimum 40% deposit requirement, even if your particular payment plan involved instalments which may  become due and payable, according to your agreement, prior to your access being granted to the programmes,  products, services or materials you’ve agreed to purchase, to satisfy said minimum deposit amount.</BulletT>
                <br/><BulletT>All agreed  deposits, instalments, and/or fees, must be paid on or before the due date</BulletT>
                <br/><BulletT>Sufficient funds are to be available  in the nominated account to meet the instalment payments.</BulletT>
                <br/><BulletT>LTI reserves the right to suspend access to any/all  products, services, memberships, subscriptions, and other course materials, whether expressed or implied, in the  event that the student fails to pay any part of the instalments, fees, or associated costs as and when it falls due  for payment  </BulletT>
                <br/><BulletT>In the event that a student cancels their membership, subscription, or enrolment in any of LTI’s products or  services beyond the statutory “cooling-off” period as stipulated by UK law, the balance of any/all agreed fees,  instalments, or other associated costs will be paid in full or will continue to be paid under the agreed payment  plan schedule and</BulletT>
                <br/><BulletT>LTI will not certify completion of any course, grant continued access to any product or
service under any circumstance, until course fees are paid in full. London Trading Institute 35 New Broad  Street London EC2M 1NH +44 (0)20 3887 7398 www.londontradinginstitute.com  
edu.londontradinginstitute.com</BulletT>
                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                            DEFAULTING ON REPAYMENT SCHEDULE
                          </div>
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                Once agreed, you are accepting full and complete liability for the debt to which you have agreed to incur for  purposes of accessing LTI’s educational products, programmes, services, subscriptions, or memberships. Failure  to uphold your obligation to repay the agreed debt will result in the following actions. LTI reserves the right to  pursue any/all of the actions to recover the debt incurred as stipulated herein.  
<br/><br/><BulletT> Enrolment will be suspended, and the outstanding account will become immediately due and payable; or  </BulletT>
<br/><BulletT>As a cancelled student the outstanding account will become immediately due and payable ix. The  outstanding debt will be forwarded on to a debt collection agency, and  </BulletT>
<br/><BulletT> The student may also be required to pay any/all additional fees/costs associated with the debt collection  process.</BulletT>
<br/><BulletT> Failure of the student to meet their contractual obligations to LTI may also, in certain cases and at  LTI’s discretion, result in legal action. If we are forced to pursue legal action, all legal and associated fees will  become due in addition to the debt being pursued.  </BulletT>
                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "24px", color: "rgb(23, 38, 71)"}}>
                      <div>
                          <div>
                          REFUND POLICY  
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize:"14px", margin: "20px 0px", textAlign: "left"}}>
                LTI adhere to the UK’s statutory “Cooling-Off Period” regulations, which stipulate that a consumer is entitled to  a full refund if they’ve changed their mind within 14-days of purchase. If the student does change their mind  within this 14-day cooling off period, LTI will issue a full refund. Once you have taken delivery of your course,  and have logged in and begun learning the materials, any refund requests beyond this period will not be  accepted. 
                <br/><br/><BulletT>If a student withdraws from any of our courses more than 14 days before commencement of the  course he/she is entitled to a full refund less 15% processing fee. Any refunds will be processed  within 45 days of claim. </BulletT>
                <br/><BulletT>50% refund will be given to any student who withdraws up to 14 days before the commencement  of the course. </BulletT>
                <br/><BulletT>No refund will be given to any student who withdraws after commencement of the course. Once a delegate has signed their student agreement form and commenced their given programme they  are obliged to pay their tuition fees in full according to their instalment plan.</BulletT>

                </DescriptionContainer>
            </AboutContainerAboutPage>
                          </div>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
