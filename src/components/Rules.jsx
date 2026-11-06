
import React from "react";
import "../styles/Rules.css";

const Rules = () => {
  return (
    <section className="rules-section" id="rules">
      <div className="rules-container">

        <div className="rules-heading">
          <span>KNOW BEFORE YOU ENTER</span>
          <h2>RULES <span>&</span> REGULATIONS</h2>
          <div className="rules-divider">✦</div>
          <p className="rules-important-note">
                <span></span>
                   IMPORTANT: ALL PARTICIPANTS MUST READ THE OFFICIAL
                   RULEBOOK BEFORE THE EVENT.
                <span></span>
            </p>
        </div>

        <div className="rules-card">
          <div className="rules-icon">📜</div>

          <h3>OFFICIAL RULEBOOK</h3>

          <p>
            Find all the event guidelines, round-wise instructions,
            eligibility criteria and competition rules in the
            official Circuit Rush rulebook.
          </p>

          <a
            href="/assets/documents/CIRCUIT RUSH Rule book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rules-button"
          >
            VIEW RULEBOOK <span></span>
          </a>

          <span className="rules-note">
            PLEASE READ THE RULEBOOK BEFORE THE EVENT
          </span>
        </div>

      </div>
    </section>
  );
};

export default Rules;
