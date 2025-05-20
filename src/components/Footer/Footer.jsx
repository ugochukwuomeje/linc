import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* ───────── Footer ───────── */}
      <footer className="site-footer">
        <Container>
          <Row className="gy-5">
            {/* Brand */}
            <Col lg={3} md={6}>
              <div className="footer-brand d-flex align-items-center mb-3">
                <i className="bi bi-house-door-fill footer-logo"></i>
                <h5 className="mb-0">
                  Linc&nbsp;Home
                  <br />
                  Solutions
                </h5>
              </div>
              <p className="footer-text text-start">
                We help Atlanta homeowners
                <br />
                sell quickly and hassle‑free.
              </p>
            </Col>

            {/* Quick Links */}
            <Col lg={3} md={6}>
              <h6 className="footer-heading text-start">Quick Links</h6>
              <ul className="footer-links text-start">
                <li>
                  <a href="#how">How It Works</a>
                </li>
                <li>
                  <a href="#who">Who We Help</a>
                </li>
                <li>
                  <a href="#why">Why Choose Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </Col>

            {/* Contact */}
            <Col lg={3} md={6}>
              <h6 className="footer-heading text-start">Contact</h6>
              <ul className="footer-contact text-start">
                <li>
                  <i className="bi bi-telephone"></i> (404)&nbsp;123‑4567
                </li>
                <li>
                  <i className="bi bi-envelope"></i>{" "}
                  info@linchomesolutions.com
                </li>
                <li>
                  <i className="bi bi-geo-alt"></i> Atlanta,&nbsp;GA
                </li>
              </ul>
            </Col>

            {/* Newsletter */}
            <Col lg={3} md={6}>
              <h6 className="footer-heading text-start">Newsletter</h6>
              <p className="footer-text text-start">
                Subscribe for real estate tips and market updates.
              </p>
              <form className="newsletter-form d-flex">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  required
                />
                <Button type="submit" className="ms-2">
                  Subscribe
                </Button>
              </form>
            </Col>
          </Row>
        </Container>

        {/* copyright & social */}
        <div className="footer-bottom">
          <Container className="d-md-flex justify-content-between align-items-center text-start">
            <span>© 2025 Linc Home Solutions. All rights reserved.</span>
            <div className="social-links mt-3 mt-md-0">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;