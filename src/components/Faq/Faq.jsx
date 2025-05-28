import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // once per app is enough

const Faq = () => (
  <>
    {/* ───────── CTA Banner ───────── */}
    <section className="cta-wrapper text-center">
      <Container>
        <h2 className="cta-title mb-3">FAQ</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>What exactly does Linc Home Solutions do ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                We help property owners sell quickly and hassle-free - whether
                the house is distressed, inherited, vacant, or facing
                foreclosure. We also work with investors to assign, close, and
                manage real estate deals.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>
                  Do I need to clean or repair my house before selling to you?
                </strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                Nope! We buy as-is. You don't need to lift a finger - no
                cleaning, no contractors, no stress.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                <strong>How fast can you close ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                In as little as 7-14 days, or on your timeline. We move fast -
                no banks, no delays.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
              >
                <strong>What types of properties do you buy ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                <strong>We buy:</strong> <br />- Inherited homes
                <br /> - Vacant or abandoned properties - Foreclosure or
                pre-foreclosure homes <br />- Rentals with bad tenants <br />-
                Fire-damaged or code-violating properties <br /> - Basically,
                anyhouse with a problem
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
              >
                <strong>Are there any fees or commissions?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                No fees. No commissions. No hidden costs. We're not agents -
                we're problem solvers.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEight"
              >
                <strong>What if I'm behind on my mortgage or taxes ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEight"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                We can still help. In many cases, we can work with your lender
                or local government to find a solution that works for both
                sides.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseNine"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseNine"
              >
                <strong>I live out of state - can I still sell to you ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseNine"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                Yes! We work with out-of-state owners all the time and can
                handle everything virtually.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTen"
              >
                <strong>What makes Linc Home Solutions different ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTen"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                We're not just buyers - we're solutionists. Whether it's closing
                fast, helping you relocate, clearing title issues, or even
                getting a fresh start - we get it done. You're not a number.
                You're our priority.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEleven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEleven"
              >
                <strong>How do I get started ?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEleven"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body" style={{ textAlign: "left" }}>
                Simple. Call us at [your phone number], or fill out the form on
                our website. We'll get back to you within 24 hours - sometimes
                faster.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default Faq;
