import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Choose.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Choose = () => (
<>
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
          <i className="bi bi-shield-check"></i>

        </div>
        <h5 className="trust-heading">Local & Trusted</h5>
        <p className="trust-text">Your Atlanta neighbors</p>
      </Col>
    </Row>
  </Container>
</section>


</>
);

export default Choose;