import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Testimonial.css";
import person1 from "../../assets/home/p1.jpg";
import person2 from "../../assets/home/p2.jpg";
import person3 from "../../assets/home/p3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // once per app is enough

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
                  <h6>Tasha R. -Buford, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                “I was overwhelmed trying to sell my late aunt’s house, and
                didn’t know where to start. Linc Home Solutions came in like
                family. They handled everything from the offer to helping me
                move forward. It wasn’t just business, it was peace of mind.”
              </p>
            </article>
          </Col>

          {/* Testimonial 2 */}
          <Col lg={4} md={6}>
            <article className="review-card">
              <div className="review-head">
                <img src={person2} alt="" />
                <div>
                  <h6>Aarav & Priya S. – Atlanta, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                “As new investors, we had no idea what to look for or who to
                trust. Linc Home Solutions walked us through every step of our
                first property deal. Transparent, fast, and super supportive
                we’re already working on our second one with them!”
              </p>
            </article>
          </Col>

          {/* Testimonial 3 */}
          <Col lg={4} md={6}>
            <article className="review-card">
              <div className="review-head">
                <img src={person3} alt="" />
                <div>
                  <h6>Daniel M. – Lawrenceville, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                “I run multiple businesses and needed a team who could get me
                off-market deals without the hassle. Linc delivered. They knew
                exactly what I was looking for, brought vetted opportunities,
                and helped me close fast. No fluff just results.”
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Testimonial;
