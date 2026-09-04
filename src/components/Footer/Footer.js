import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import facebook from '../../img/facebook.png'
import like from '../../img/like.png'
import love from '../../img/love.png'
import youtube from '../../img/youtube.png'
import { 
    FooterContainer, 
    SocialMediaContainer,
    CopyrightContainer,
    NavIconContainer,
    IconLabelContainer,
    IconLabel,
    Banner
} from './Footer.elements'
import { FlexContainer } from '../../globalStyles';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <FooterContainer>
             {/* <div id="banner" style={{marginTop: "40px"}}/> */}
             <NavIconContainer>
                {/* <StaticImage src="../../img/logo2.png" height = {60} width={70}/> */}
                <IconLabelContainer>
                </IconLabelContainer>
            </NavIconContainer> 
            <Banner style={{height: "10px", padding: "0px", backgroundColor: "#FFAB00"}}></Banner>
            <Banner style={{fontSize: "14px"}}>
                <div style={{display: "flex", flexDirection:"column", cursor: "pointer"}}>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        About
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Courses
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Free Resources
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Events
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Indicators
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <div style={{fontSize: "16px", textAlign: "end"}}>
                            London Trading Institute
                        </div>
                        <div style={{fontSize: "16px", textAlign: "end", marginBottom: "10px"}}>
                            info@londontradinginstitute.com
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            167-169 5th Floor
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            Great Portland Street
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            London, W1W 5PF
                        </div>
                    </div> 
                </div>
            </Banner>
            <Banner style={{backgroundColor: "#0F1C38"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        @2022 London Trading Institute | In order to improve your browsing experience London Trading Institute, uses cookies on this site.
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        By continuing to use our site you agree to our 
                        <Link to="/privacy" style={{color: "white", margin: "0px 10px"}}>
                            Privacy Policy
                        </Link>
                        Click here to read our 
                        <Link to="/refund" style={{color: "white", margin: "0px 10px"}}>
                            Refund Policy and Terms and Conditions
                        </Link>
                    </div>
                    <FlexContainer style={{fontSize: "12px", textAlign: "start", marginTop: "20px", alignItems: "center"}}>
                    Investors’ capital is at risk. Market investment products involve the use of leverage and may result in losses that exceed initial deposit. They may not be suitable for everyone.
                    <SocialMediaContainer>
                        <a href="https://www.youtube.com/c/LondonTradingInstitute">
                            <img
                                style={{marginLeft: "30px"}}
                                src={facebook}
                                height={50}
                                >
                            </img>
                        </a>
                        <a href="https://www.facebook.com/groups/fxtradersclub/">
                            <img style={{marginLeft: "30px"}}
                                src={youtube}
                                height={50}
                                >
                            </img>
                        </a>
                    </SocialMediaContainer> 
                    </FlexContainer>
                </div>
          
            </Banner>
            <CopyrightContainer>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
