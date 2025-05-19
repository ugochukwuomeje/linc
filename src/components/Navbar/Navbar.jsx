import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink , Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="custom-navbar sticky-top" style={{
    paddingTop: '20px',
    paddingBottom: '20px'
    
  }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" style={{ cursor: 'pointer' }}>
  <img src={logo} alt="Linc Home Solutions" className="navbar-logo" />
  <span className="navbar-brand-text">Linc Home Solutions</span>
</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
      <Nav.Link as={NavLink} to="#">How It Works</Nav.Link>
      <Nav.Link as={NavLink} to="/help">Who We Help</Nav.Link>
      <Nav.Link as={NavLink} to="#">Why Choose Us</Nav.Link>
      <Nav.Link as={NavLink} to="#">Testimonials</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
      <Nav.Link as={NavLink} to="#">FAQ</Nav.Link>
           <Button
  href="#"
  style={{
    backgroundColor: '#3599db',
    color: 'white',
    fontWeight: 600,
    padding: '0.5rem 1.25rem',
    border: 'none',
    borderRadius: '50px',
    transition: 'background-color 0.3s ease'
  }}
>
  Get Cash Offer
</Button>

          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
