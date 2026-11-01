
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">

        {/* Heading */}
        <div className="about-heading">
          <h2>
            ABOUT
            <br />
            CIRCUIT <span>RUSH</span>
          </h2>
        </div>

        {/* Description */}
        <p className="about-description">
          Circuit Rush is a three-round technical competition
          organized by the IEEE Student Branch, Dr. Ambedkar
          Institute of Technology, Bengaluru. It challenges you to think,
          troubleshoot and build, from core electronics concepts
          to real-world implementation.
        </p>

        {/* Decorative Divider */}
        <div className="about-divider">
          <span></span>
        </div>

        {/* Statistics */}
        <div className="about-stats">

          <div className="stat-item">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M16 23c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M3 39v-4c0-6 5-9 13-9s13 3 13 9v4M32 9c4 0 7 3 7 7s-3 7-7 7M35 27c6 1 10 4 10 9v3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M24 13c2-3 5-4 8-2 3 2 3 7 0 10l-8 7-8-7c-3-3-3-8 0-10 3-2 6-1 8 2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <h3>50</h3>
            <p>TEAMS</p>
          </div>

          <div className="stat-item">
            <svg viewBox="0 0 48 48" fill="none">
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r="11"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r="4"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>

            <h3>3</h3>
            <p>ROUNDS</p>
          </div>

          <div className="stat-item">
            <svg viewBox="0 0 48 48" fill="none">
              <rect
                x="12"
                y="12"
                width="24"
                height="24"
                rx="3"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <rect
                x="19"
                y="19"
                width="10"
                height="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M18 5v7m12-7v7M18 36v7m12-7v7M5 18h7m-7 12h7m24-12h7m-7 12h7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <h3>1</h3>
            <p>CHAMPION</p>
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="about-footer">
          <span>TEST YOUR KNOWLEDGE.</span>
          <span>SHARPEN YOUR SKILLS.</span>
          <span>BRING IDEAS TO LIFE.</span>
        </div>

      </div>
    </section>
  );
};

export default About;
