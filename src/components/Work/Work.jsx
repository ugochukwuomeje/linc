import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Work = () => (
<>
{/* ───────── Testimonials ───────── */}

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
            <h5 className="step-heading mt-3">Close On Your Timeline</h5>
            <p className="step-text">
              Choose your closing date
            </p>
          </Col>
        </Row>
      </Container>
    </section>


</>
);

export default Work;