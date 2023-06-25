import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import a from '../images/logo1.svg';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ step, setStep }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScrollToValue = () => {
    return isMobile ? 'scott' : 'earn';
  };
  const getScrollToValue2 = () => {
    return isMobile ? 'scott2' : 'earn';
  };
  const getScrollToValue3 = () => {
    return isMobile ? 'scott3' : 'earn';
  };
  const getScrollToValue4 = () => {
    return isMobile ? 'scott4' : 'earn';
  };

  const getOffsetValue = () => {
    return isMobile ? -3 : -130;
  };
  const earnnn = () => {
    setStep(2);
  };
  const savvvv = () => {
    setStep(3);
  };
  const invesrrt = () => {
    setStep(4);
  };
  const growwww = () => {
    setStep(7);
  };
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ background: '#000000' }}
        className="pt-4 pb-4"
      >
        <Container>
          <Navbar.Brand className="width">
            <div>
              <div style={{ color: 'white' }}>
                <img src={a} alt="" />
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto widdd">
              <div className="lowe_screen also">Mobile Wallet</div>
              <ScrollLink
                activeClass="active"
                to={getScrollToValue()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={earnnn}
              >
                <div className="lowe_screen">Earn</div>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to={getScrollToValue2()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={savvvv}
              >
                <div className="lowe_screen">Save</div>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to={getScrollToValue3()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={invesrrt}
              >
                <div className="lowe_screen">Invest </div>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to={getScrollToValue4()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={growwww}
              >
                <div className="lowe_screen">Grow</div>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="waitlist"
                spy={true}
                smooth={true}
                offset={-10}
                duration={300}
                style={{ textDecoration: 'none' }}
              >
                <div className="lowe_screen holy">Join waitlist</div>
              </ScrollLink>
            </Nav>
            <div className="but_Holder">
              <div className="button_nav">
                <button className="language_switch">EN</button>
                <ScrollLink
                  activeClass="active"
                  to="waitlist"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={300}
                  style={{ textDecoration: 'none' }}
                >
                  <button className="join_witlist">Join Waitlist</button>
                </ScrollLink>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
