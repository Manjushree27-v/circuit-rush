import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      {/* FINAL CALL TO ACTION */}
      <section className="footer-cta">
        <div className="footer-cta-content">
          <h2>
            READY TO TAKE
            <br />
            THE CHALLENGE?
          </h2>

          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScbG-ysrWQvcdQLpnKavmPJlhfPkDKjlxeV-CnGe0WU9XYZ7Q/viewform?usp=dialog"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-register-btn"
>
  REGISTER NOW <span></span>
</a>

          <div className="footer-cta-tagline">
            SAME CIRCUITS. BIGGER DREAMS.
            <br />
            SEE YOU IN THE ARENA.
          </div>
        </div>
      </section>

      {/* FINAL FOOTER */}
      <footer className="site-footer" id="footer">

        <div className="footer-overlay"></div>

        <div className="footer-content">

          {/* LEFT */}
          <div className="footer-column footer-left">
            <h3>IEEE STUDENT BRANCH</h3>
            <p>DR. AIT, BENGALURU</p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/ieee.drait_sb?psln=aGtwajl2dDh0cXVs"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>

              <a
                href="https://www.linkedin.com/company/ieee-student-branch-dr-ait/home/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </div>

            <a
              className="footer-contact"
              href="mailto:ieeesb@drait.edu.in"
            >
              ieeesb@drait.edu.in
            </a>
          </div>

          {/* CENTRE */}
          <div className="footer-center">
            <h2>
              QUIZ.
              <br />
              DEBUG.
              <br />
              BUILD.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="footer-column footer-right">
            <h3>CIRCUIT RUSH</h3>
            <p>IEEE TECHNICAL COMPETITION</p>

            <div className="footer-location">
              DR. AIT, BENGALURU
            </div>

            <a href="#home" className="footer-back-top">
              BACK TO TOP ↑
            </a>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <span>©2026CIRCUITRUSH</span>
            <span>ORGANISED BY IEEE STUDENT BRANCH, DR. AIT</span>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;