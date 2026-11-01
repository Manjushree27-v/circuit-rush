import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">


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

        <a href="#register" className="hero-register">
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
