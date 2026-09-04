
import React, {useState} from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavIconContainer,
    NavMenu, 
    NavItem, 
    NavLink, 
    NavButton, 
    NavButtonContainer, 
    IconLabelContainer, 
    IconLabel
} from './Navbar.elements'
import logo from '../../img/logo-h.svg'
import { Button } from '../Courses/Courses.elements'
import { ModalContainer, Modal } from '../../globalStyles'
import Booking from '../Booking/Booking'

const Navbar = () => {
    const [show, toggleModal]  = useState(false)
    const [menu, toggleMenu] = useState(false);
    const isBrowser = () => typeof window !== "undefined"

    return (
    <Nav>
        { show && <ModalContainer>
    <Modal>
        <Booking close={()=>toggleModal(false)} lone></Booking>
     </Modal>
 </ModalContainer>}
           <NavbarContainer style={{justifyContent: !menu?'space-between':'' }}>
             {!menu && <NavIconContainer to = '/'>
                <IconLabelContainer>
                    <IconLabel>
                        <img
                            className="icon"
                            src={logo}
                            height={50}
                        >
                        </img>
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
            }   
            { isBrowser() && window.screen.availWidth < 500 && !menu && 
            <div className="burger" style={{textAlign: "right", cursor: "pointer", padding: "10px"}} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>}
             <NavMenu className={!menu?'no-mobile':""}>
             {menu && <NavIconContainer to = '/'>
                <IconLabelContainer>
                    <IconLabel>
                        <img
                            className="icon"
                            src={logo}
                            height={50}
                        >
                        </img>
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
            }   
                <NavItem>
                    <NavLink to="/">
                        Home
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/courses">
                        Courses
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/about">
                        About
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/intro-forex-course">
                        Free Course
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/indicators">
                        Indicators
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/">
                            <Button style={{padding: "10px 10px", marginTop: "0px"}} onClick={() =>{toggleModal(true)}}>
                            Free Consultation
                        </Button>
                    </NavLink>
                 </NavItem>
             </NavMenu>
             {/* <NavButtonContainer>
                <NavButton>
                    <NavLink bold to="/pricing">
                        Pricing
                    </NavLink>
                </NavButton>
             </NavButtonContainer> */}
           </NavbarContainer>

       </Nav>
    )
}

export default Navbar

