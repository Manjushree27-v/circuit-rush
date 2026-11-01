
import React from "react";
import "../styles/Navbar.css";

const ieeeLogo = "/assets/logos/ieee-logo.png";

const Navbar = () => {

 
const handleSmoothScroll = (event) => {
  const href = event.currentTarget.getAttribute("href");
  const target = document.querySelector(href);

  if (!target) return;

  event.preventDefault();

  // Find the actual heading inside the section
  const heading =
    target.querySelector(".rounds-heading, .about-heading") || target;

  // Calculate the space occupied by the fixed navbar
  const navbar = document.querySelector(".navbar");
  const navbarBottom = navbar
    ? navbar.getBoundingClientRect().bottom
    : 0;

  const gap = 14;

  // Scroll directly to the heading
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
};


  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />

        <span className="brand-branch">
          IEEE Student Branch
          <br />
          Dr. AIT
        </span>
      </div>

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

    </nav>
  );
};

export default Navbar;
