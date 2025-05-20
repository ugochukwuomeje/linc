import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Offer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Offer = () => (
<>
  {/* ───────── Offer + Form Section ───────── */}
<section className="offer-wrapper">
  <Container>
    <Row className="align-items-start">
      {/* Left column – benefits list */}
      <Col lg={6} className="mb-5 mb-lg-0">
        <h2 className="offer-title text-start">Get Your Free Cash Offer</h2>
        <p className="offer-lead text-start">
          Fill out the form and we'll contact you within 24 hours with a competitive
          cash offer for your home.
        </p>

        <ul className="offer-bullets">
          <li><i className="bi bi-check2"></i>No fees or commissions</li>
          <li><i className="bi bi-check2"></i>Sell your home as‑is</li>
          <li><i className="bi bi-check2"></i>Close in as little as 7 days</li>
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

</>
);

export default Offer;