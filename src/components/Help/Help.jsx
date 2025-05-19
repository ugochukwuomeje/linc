import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Clock,
  FileText,
  Gift,
  Truck,
  Slash,
  Hammer,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Help.css";

const Help = () => {
  // data + icon nodes
  const items = [
    {
      icon: <Clock />,
      title: "Facing Foreclosure",
      text: "Avoid foreclosure and protect your credit. We can help you move forward quickly.",
    },
    {
      icon: <FileText />,
      title: "Probate Properties",
      text: "Navigate probate smoothly. We handle all the complexities.",
    },
    {
      icon: <Gift />,
      title: "Inherited Property",
      text: "Turn your inherited property into cash without repairs or cleaning.",
    },
    {
      icon: <Truck />,
      title: "Job Relocation",
      text: "Need to move quickly for work? We can close on your timeline.",
    },
    {
      icon: <Slash />,
      title: "Divorce Situations",
      text: "Fast, discreet solutions when you need to sell during divorce.",
    },
    {
      icon: <Hammer />,
      title: "Major Repairs Needed",
      text: "Sell your home as‑is — no repairs or renovations needed.",
    },
  ];

  return (
    <main className="help-page">
      {/* hero -------------------------------------------------------------- */}
      <section className="py-5 text-center help-hero">
        <Container>
          <h1 className="display-6 fw-semibold">
            We Help Atlanta Homeowners in All Situations
          </h1>
          <p className="lead text-secondary">
            Fast, fair offers for your home – regardless of your situation
          </p>
        </Container>
      </section>

      {/* cards ------------------------------------------------------------- */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {items.map(({ icon, title, text }, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="icon-wrap mb-3">{icon}</div>
                    <Card.Title className="fs-5">{title}</Card.Title>
                    <Card.Text className="small text-secondary">
                      {text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* banner ------------------------------------------------------------ */}
      <section className="help-banner text-center text-white py-5">
        <Container>
          <h2 className="h4 fw-semibold mb-3">
            No matter your reason, we're here to make selling easy.
          </h2>
          <p className="mb-0 small">
            Every situation is unique. We provide personalized solutions with
            compassion and understanding.
          </p>
        </Container>
      </section>
      {/* CTA button --------------------------------------------------------- */}
<section className="help-cta text-center py-5">
  <Container>
    <button className="btn btn-primary btn-lg px-4 rounded-pill">
      Get Help Now
    </button>
    <p className="small text-secondary mt-3">
      Free consultation · No obligation · Fast response
    </p>
  </Container>
</section>

{/* quick stats -------------------------------------------------------- */}
<section className="help-stats py-5">
  <Container>
    <Row className="text-center gy-4">
      <Col xs={12} md={4}>
        <div className="stat-icon mb-2 text-warning fs-4">★★★★★</div>
        <h3 className="h5 mb-0 fw-bold">500+</h3>
        <p className="small text-secondary mb-0">Happy Homeowners</p>
      </Col>

      <Col xs={12} md={4}>
        <h3 className="h5 mb-0 fw-bold">15+</h3>
        <p className="small text-secondary mb-0">Years<br />Serving Atlanta</p>
      </Col>

      <Col xs={12} md={4}>
        <h3 className="h5 mb-0 fw-bold text-primary">A+</h3>
        <p className="small text-secondary mb-0">BBB Rating<br />Accredited Business</p>
      </Col>
    </Row>
  </Container>
</section>

    </main>
  );
};

export default Help;
