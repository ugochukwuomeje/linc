import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Faq = () => (
<>
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

export default Faq;