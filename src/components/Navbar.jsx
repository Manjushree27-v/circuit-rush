import React from "react";
import "../styles/Navbar.css";
const ieeeLogo = "/assets/logos/ieee-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* IEEE Branding */}
      <div className="navbar-brand">
  <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />

  <span className="brand-branch">
    IEEE Student Branch
    <br />
    Dr. AIT
  </span>
</div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#rounds">ROUNDS</a>
        <a href="#prizes">PRIZES</a>
        <a href="#rules">RULES</a>
        <a href="#faq">FAQ</a>
      </div>

      {/* Register Button */}
      <a href="#register" className="navbar-register">
        REGISTER NOW <span>↗</span>
      </a>
    </nav>
  );
};

export default Navbar;
