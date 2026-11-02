
import React from "react";
import "../styles/EventDetails.css";

const EventDetails = () => {
  return (
    <section className="event-details-section" id="event-details">
      <div className="event-details-content">

        <h2 className="event-details-heading">
          EVENT DETAILS <span>✦</span>
        </h2>

        <div className="event-details-grid">

          {/* DATE */}
          <div className="event-detail">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="16" rx="2"
                stroke="currentColor" strokeWidth="1.8" />
              <path d="M7 3v4M17 3v4M3 10h18"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" />
              <path d="M7 14h2m3 0h2m3 0h1M7 17h2m3 0h2"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" />
            </svg>
            <h3>DATE</h3>
            <p>21 November 2026</p>
          </div>

          {/* VENUE */}
          <div className="event-detail">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5"
                stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <h3>VENUE</h3>
            <p>Dr. AIT, Bengaluru</p>
          </div>

          {/* TEAM SIZE */}
          <div className="event-detail">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" />
              <circle cx="9" cy="7" r="4"
                stroke="currentColor" strokeWidth="1.8" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" />
            </svg>
            <h3>TEAM SIZE</h3>
            <p>2 Members Only</p>
          </div>

          {/* ELIGIBILITY */}
          <div className="event-detail">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="7" r="4"
                stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 21v-2a8 8 0 0 1 16 0v2"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" />
            </svg>
            <h3>ELIGIBILITY</h3>
            <p>BE / B.Tech Students<br />(All Branches)</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;
