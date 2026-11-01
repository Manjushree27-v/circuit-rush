
import React, { useState } from "react";
import "../styles/Navbar.css";

const ieeeLogo = "/assets/logos/ieee-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (event) => {
    const href = event.currentTarget.getAttribute("href");
    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    const heading =
      target.querySelector(".rounds-heading, .about-heading") || target;

    const navbar = document.querySelector(".navbar");
    const navbarBottom = navbar
      ? navbar.getBoundingClientRect().bottom
      : 0;

    const gap = 14;

    const scrollPosition =
      window.scrollY +
      heading.getBoundingClientRect().top -
      navbarBottom -
      gap;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* BRAND */}
      <div className="navbar-brand">
        <img
          src={ieeeLogo}
          alt="IEEE Logo"
          className="ieee-logo"
        />

        <span className="brand-branch">
          IEEE Student Branch
          <br />
          Dr. AIT
        </span>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAVIGATION MENU */}
      <div
        className={`navbar-menu ${menuOpen ? "is-open" : ""}`}
        id="navbar-menu"
      >
        <div className="navbar-links">
          <a href="#home" onClick={handleSmoothScroll}>HOME</a>
          <a href="#about" onClick={handleSmoothScroll}>ABOUT</a>
          <a href="#rounds" onClick={handleSmoothScroll}>ROUNDS</a>
          <a href="#prizes" onClick={handleSmoothScroll}>PRIZES</a>
          <a href="#rules" onClick={handleSmoothScroll}>RULES</a>
          <a href="#faq" onClick={handleSmoothScroll}>FAQ</a>
        </div>

        <a
          href="#register"
          className="navbar-register"
          onClick={handleSmoothScroll}
        >
          REGISTER NOW <span></span>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
