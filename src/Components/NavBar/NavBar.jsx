import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import a from '../images/logo1.svg'
const NavBar = () => {
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
              <div className="lowe_screen">Earn</div>
              <div className="lowe_screen">Save</div>
              <div className="lowe_screen">Invest </div>
              <div className="lowe_screen">Grow</div>
            </Nav>
            <div className="but_Holder">
              <div className="button_nav">
                <button className="language_switch">EN</button>
                <button className="join_witlist">Join Waitlist</button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
