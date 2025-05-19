import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import heroImg from '../../assets/home/hero.jpg';
import person1 from '../../assets/home/p1.jpg';
import person2 from '../../assets/home/p2.jpg';
import person3 from '../../assets/home/p3.jpg';
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

    {/* ───────── 3 Simple Steps Section ───────── */}
    <section className="steps-wrapper">
      <Container>
        <h2 className="steps-title text-center">
          Sell Your Home in 3 Simple Steps
        </h2>

        <Row className="gy-5 justify-content-center">
          {/* Step 1 */}
          <Col lg={4} md={6} className="text-center">
            <div className="step-icon">
              <i className="bi bi-house-door"></i>
            </div>
            <h5 className="step-heading mt-3">Tell Us About Your Home</h5>
            <p className="step-text">
              Share basic details about your property
            </p>
          </Col>

          {/* Step 2 */}
          <Col lg={4} md={6} className="text-center">
            <div className="step-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <h5 className="step-heading mt-3">Get Your Cash Offer</h5>
            <p className="step-text">
              Receive a fair, no‑obligation offer
            </p>
          </Col>

          {/* Step 3 */}
          <Col lg={4} md={6} className="text-center">
            <div className="step-icon">
              <i className="bi bi-calendar-event"></i>
            </div>
            <h5 className="step-heading mt-3">Close On Your Timeline</h5>
            <p className="step-text">
              Choose your closing date
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ───────── Offer + Form Section ───────── */}
<section className="offer-wrapper">
  <Container>
    <Row className="align-items-start">
      {/* Left column – benefits list */}
      <Col lg={6} className="mb-5 mb-lg-0">
        <h2 className="offer-title text-start">Get Your Free Cash Offer</h2>
        <p className="offer-lead text-start">
          Fill out the form and we'll contact you within 24 hours with a competitive
          cash offer for your home.
        </p>

        <ul className="offer-bullets">
          <li><i className="bi bi-check2"></i>No fees or commissions</li>
          <li><i className="bi bi-check2"></i>Sell your home as‑is</li>
          <li><i className="bi bi-check2"></i>Close in as little as 7 days</li>
          <li><i className="bi bi-check2"></i>No repairs needed</li>
        </ul>
      </Col>

      {/* Right column – simple form */}
      <Col lg={6}>
        <h2 className="offer-title text-start">Get Your Free Home Value Report</h2>

        <form className="value-form">
          <input type="text"     placeholder="Full Name"        required />
          <input type="email"    placeholder="Email Address"    required />
          <input type="text"     placeholder="Property Address" required />
          <textarea rows="3"     placeholder="Additional Notes" />
          <Button className="value-submit" type="submit">
            Get My Free Report
          </Button>
        </form>
      </Col>
    </Row>
  </Container>
</section>

{/* ───────── Why Homeowners Trust Us ───────── */}
<section className="trust-wrapper">
  <Container>
    <h2 className="trust-title text-center">
      Why Atlanta Homeowners Trust Us
    </h2>

    <Row className="gy-5 justify-content-center">
      {/* Card 1 */}
      <Col lg={3} md={6} className="text-center">
        <div className="trust-icon">
          <i className="bi bi-cash-stack"></i>
        </div>
        <h5 className="trust-heading">No Fees or Commissions</h5>
        <p className="trust-text">Keep more money in your pocket</p>
      </Col>

      {/* Card 2 */}
      <Col lg={3} md={6} className="text-center">
        <div className="trust-icon">
          <i className="bi bi-tools"></i>
        </div>
        <h5 className="trust-heading">Buy As‑Is</h5>
        <p className="trust-text">No repairs or cleaning needed</p>
      </Col>

      {/* Card 3 */}
      <Col lg={3} md={6} className="text-center">
        <div className="trust-icon">
          <i className="bi bi-clock-history"></i>
        </div>
        <h5 className="trust-heading">7‑Day Closing</h5>
        <p className="trust-text">Quick and hassle‑free process</p>
      </Col>

      {/* Card 4 */}
      <Col lg={3} md={6} className="text-center">
        <div className="trust-icon">
          <i className="bi bi-handshake"></i>
        </div>
        <h5 className="trust-heading">Local & Trusted</h5>
        <p className="trust-text">Your Atlanta neighbors</p>
      </Col>
    </Row>
  </Container>
</section>

{/* ───────── Testimonials ───────── */}
<section className="reviews-wrapper">
  <Container>
    <h2 className="reviews-title text-center">What Our Sellers Say</h2>

    <Row className="gy-4">
      {/* Testimonial 1 */}
      <Col lg={4} md={6}>
        <article className="review-card">
          <div className="review-head">
            <img src={person1} alt="" />
            <div>
              <h6>Sarah Johnson</h6>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <p className="review-text">
            They made selling my home so easy. I got a fair cash offer and closed within a week!
          </p>
        </article>
      </Col>

      {/* Testimonial 2 */}
      <Col lg={4} md={6}>
        <article className="review-card">
          <div className="review-head">
            <img src={person2} alt="" />
            <div>
              <h6>Michael Thompson</h6>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <p className="review-text">
            Professional, honest, and quick. Exactly what I needed when relocating for work.
          </p>
        </article>
      </Col>

      {/* Testimonial 3 */}
      <Col lg={4} md={6}>
        <article className="review-card">
          <div className="review-head">
            <img src={person3} alt="" />
            <div>
              <h6>Emily Davis</h6>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <p className="review-text">
            No repairs needed, no hassles. They took care of everything for me.
          </p>
        </article>
      </Col>
    </Row>
  </Container>
</section>

{/* ───────── CTA Banner ───────── */}
<section className="cta-wrapper text-center">
  <Container>
    <h2 className="cta-title mb-3">Ready to Get Started?</h2>
    <p className="cta-text mb-4">
      Get your cash offer today and sell your home on your terms.
    </p>
    <Button size="lg" className="cta-btn">
      Request Free Offer
    </Button>
  </Container>
</section>


  </>
);

export default Home;
