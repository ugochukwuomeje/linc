import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import heroImg from '../../assets/home/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Home = () => (
  <>
    {/* ───────── Hero Section ───────── */}
    <section className="hero-wrapper">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}

        role="img"
        aria-label="House background"
      />

      <Container className="hero-content">
        <Row className='justify-content'>  
          <Col lg={7} md={10}>
            <h1 className="hero-title text-start">
              Need to Sell Your Home <br /> Fast? We Can Help.
            </h1>

            <p className="hero-subtitle text-start">
              Get a cash offer for your home in any condition. No agents,
              no fees, no stress.
            </p>

            <div className="hero-buttons d-flex">
              <Button className="cta-primary me-3" size="lg">
                Get My Cash Offer
              </Button>
              <Button
                className="cta-secondary"
                variant="outline-light"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            <ul className="hero-badges mt-4">
              <li>✅ BBB Accredited</li>
              <li>✅ 5‑Star Rated</li>
              <li>✅ Local Experts</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  
  </>
);

export default Home;