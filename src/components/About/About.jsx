import React from "react";
import "./About.css";

// images -------------------------------------------------
import houseImg from "../../assets/about/house.jpg";        // hero / stand‑for
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
          <h2>What We Stand For</h2>
          <p>
            At Linc Home Solutions, we believe that selling your home shouldn&apos;t
            be stressful or complicated. Whether you&apos;re facing foreclosure,
            inherited a property, or just want to sell fast — we&apos;re here to
            offer clarity, honesty, and speed.
          </p>
          <p>
            We help Atlanta homeowners sell quickly, respectfully, and without
            hassle.
          </p>
        </div>

        <div className="about__image">
          <img src={houseImg} alt="House model with keys on a table" />
        </div>
      </div>

      {/* team --------------------------------------------------------------- */}
      <div className="about__team">
        <h2>A Team That Cares</h2>

        <div className="about__teamGrid container">
          {team.map((m, i) => (
            <article key={i} className="about__card">
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p className="blurb">{m.blurb}</p>
            </article>
          ))}
        </div>
      </div>

      {/* CTA ---------------------------------------------------------------- */}
      <div className="about__cta container">
        <h2>Let's Talk About Your Home</h2>
        <p>Get a fair, no‑obligation cash offer for your home within 24 hours</p>
        <button className="btn-primary">Get Your Free Cash Offer</button>
      </div>
    </section>
  );
};

export default About;
