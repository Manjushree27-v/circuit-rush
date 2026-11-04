import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="registration-announcement">
        <span>✦</span>
          REGISTRATION STARTS FROM 6th NOVEMBER 2026
       <span>✦</span>
      </div>


      <div className="hero-content">

        <p className="hero-eyebrow">
          
        </p>

        <img
          src="/assets/logos/circuit-rush-logo.png"
          alt="Circuit Rush"
          className="hero-logo"
        />

        <p className="hero-tagline">
          QUIZ <span>✦</span> DEBUG <span>✦</span> BUILD
        </p>

        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScbG-ysrWQvcdQLpnKavmPJlhfPkDKjlxeV-CnGe0WU9XYZ7Q/viewform?usp=dialog"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-register"
>
  REGISTER NOW <span></span>
</a>

        <div className="hero-highlights">
          <span>50 TEAMS</span>
          <span>3 ROUNDS</span>
          <span>1 CHAMPION</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;
