import React from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        <BootstrapNavbar.Brand
          as="a"
          href="#home"
          className="navbar-brand"
          style={{ cursor: "pointer" }}
        >
          <Link to="/">
            <img src={logo} alt="Linc Home Solutions" className="navbar-logo" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-brand-text">Linc Home Solutions</span>
          </Link>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="navbar-nav align-items-center">
            <Link className="nav-link" to="/how-it-works">
              How It Works
            </Link>
            <Link className="nav-link" to="/help">
              Who We Help
            </Link>
            <a className="nav-link" href="/#why-choose-us">
              Why Choose Us
            </a>
            <Link className="nav-link" to="/testimonial">
              Testimonials
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
            <Button
              href="/#offer"
              style={{
                backgroundColor: "#3599db",
                color: "white",
                fontWeight: 600,
                padding: "0.5rem 1.25rem",
                border: "none",
                borderRadius: "50px",
                transition: "background-color 0.3s ease",
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
