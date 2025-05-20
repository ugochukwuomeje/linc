import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Testimonial.css';
import person1 from '../../assets/home/p1.jpg';
import person2 from '../../assets/home/p2.jpg';
import person3 from '../../assets/home/p3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';    // once per app is enough

const Testimonial = () => (
<>
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
              <h6>Sarah Johnson</h6>
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
              <h6>Michael Thompson</h6>
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
              <h6>Emily Davis</h6>
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
</>
);

export default Testimonial;