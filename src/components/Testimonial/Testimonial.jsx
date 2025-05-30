import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Testimonial.css";
// import person1 from "../../assets/home/p1.jpg";
// import person2 from "../../assets/home/p2.jpg";
// import person3 from "../../assets/home/p3.jpg";
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
          <Col lg={3} md={6}>
            <article className="review-card">
              <div className="review-head">
                <span style={{ background: "purple" }}>T</span>
                <div>
                  <h6>Tonya H., Decatur, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "Linc Home Solutions made what I thought would be a nightmare
                absolutely painless. I was behind on mortgage payments and
                stressed about foreclosure. Their team was honest, respectful,
                and had an offer to me within 24 hours. I was able to close in
                less than two weeks — no repairs, no stress. "
              </p>
            </article>
          </Col>

          {/* Testimonial 2 */}
          <Col lg={3} md={6}>
            <article className="review-card">
              <div className="review-head">
                <span style={{ background: "blue" }}>A</span>
                <div>
                  <h6>A. Simmons, Stone Mountain, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "I was skeptical at first. Too many people calling saying they
                could buy my house fast. But when I talked to Linc, it felt
                different. They didn’t make crazy promises — just real info and
                an offer that actually made sense. It helped me move on, and I’m
                thankful for that. "
              </p>
            </article>
          </Col>

          {/* Testimonial 3 */}
          <Col lg={3} md={6}>
            <article className="review-card">
              <div className="review-head">
                <span style={{ background: "violet" }}>M</span>
                <div>
                  <h6>Mike T., Stone Mountain</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "I got a job offer out of state and had to move fast. Linc gave
                me an offer right away and worked around my schedule. No stress,
                no games — just straight to the point. "
              </p>
            </article>
          </Col>
          <Col lg={3} md={6}>
            <article className="review-card">
              <div className="review-head">
                <span style={{ background: "green" }}>C</span>
                <div>
                  <h6>Carmen B., East Point, GA</h6>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review-text">
                "I had tried listing my house, but it sat for months. Too many
                repairs and I couldn’t afford to fix anything. A friend told me
                about Linc Home Solutions, and they made it simple. No cleaning,
                no showings, just a straightforward offer and a quick closing. "
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Testimonial;
