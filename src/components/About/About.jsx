import React from "react";
import "./About.css";

// images -------------------------------------------------
import houseImg from "../../assets/about/house.jpg"; // hero / stand‑for
import davidImg from "../../assets/about/team1.jpg";
import sarahImg from "../../assets/about/team2.jpg";
import michaelImg from "../../assets/about/team1.jpg";
// --------------------------------------------------------

const About = () => {
  // team data ----------------------------------------------------------------
  const team = [
    {
      img: davidImg,
      name: "David Mitchell",
      role: "Founder & CEO",
      blurb: "15+ years helping Atlanta homeowners find solutions.",
    },
    {
      img: sarahImg,
      name: "Sarah Thompson",
      role: "Property Specialist",
      blurb: "Expert in real‑estate valuations and market analysis.",
    },
    {
      img: michaelImg,
      name: "Michael Brooks",
      role: "Client Success Manager",
      blurb: "Dedicated to ensuring smooth, hassle‑free transactions.",
    },
  ];
  // -------------------------------------------------------------------------

  return (
    <section className="about">
      {/* hero --------------------------------------------------------------- */}
      <div className="about__hero">
        <h1>Meet Linc Home Solutions</h1>
        <p>
          Real people. Real solutions. Helping Atlanta homeowners move forward.
        </p>
      </div>

      {/* what we stand for -------------------------------------------------- */}
      <div className="about__standfor container">
        <div className="about__text">
          <h2>Who We Are</h2>
          <p>
            <b>A</b>t Linc Home Solutions, we do more than buy houses — we
            create real solutions for real people.
          </p>
          <p>
            <b>W</b>e understand that selling a home isn’t always about a quick
            check. Sometimes it’s about timing, life changes, or simply needing
            the right guidance. That’s where we come in.
          </p>
          <p>
            <b>W</b>hether you’re facing foreclosure, managing an inherited
            property, dealing with tenant issues, or just need to sell on your
            terms — we take a personalized, transparent, and respectful approach
            to every situation.
          </p>
          <p>
            <b>W</b>e don’t rely on cookie-cutter offers. We listen first — then
            we offer a range of options, including:
          </p>
          <p>
            <ul className="offer-bullets">
              <li>
                <i className="bi bi-check2"></i>Fast cash closings
              </li>
              <li>
                <i className="bi bi-check2"></i>Seller finance solutions
              </li>
              <li>
                <i className="bi bi-check2"></i>Partnership opportunities
              </li>
              <li>
                <i className="bi bi-check2"></i>Creative exit strategies
                tailored to you
              </li>
            </ul>
          </p>
        </div>

        <div className="about__image">
          <img src={houseImg} alt="House model with keys on a table" />
        </div>
      </div>

      <div className="about__cta container">
        <h2>Let's Talk About Your Home</h2>
        <p>
          Get a fair, no‑obligation cash offer for your home within 24 hours
        </p>
        <button className="btn-primary">Get Your Free Cash Offer</button>
      </div>
    </section>
  );
};

export default About;
