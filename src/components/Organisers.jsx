import React from "react";
import "../styles/Organisers.css";

const organisations = [
  {
    name: "Dr. Ambedkar Institute of Technology",
    image: "/assets/organisers/college-logo.png",
  },
  {
    name: "IEEE",
    image: "/assets/logos/ieee-logo.png",
  },
  {
    name: "IEEE Bangalore Section",
    image: "/assets/organisers/ieee-blr-logo.png",
  },
  {
    name: "Institution's Innovation Council",
    image: "/assets/organisers/iic-logo.png",
  },
];

const organisers = [
  {
    name: "RAHUL R GOWDA",
    phone: "+91 97433 43601",
  },
  {
    name: "PREETHAM",
    phone: "+91 90191 61004",
  },
];

const Organisers = () => {
  return (
    <section className="organisers-section" id="organisers">
      <div className="organisers-container">

        <div className="organisers-heading">
          <span>THE MINDS BEHIND THE EVENT</span>

          <h2>
            ORGANISED <span>BY</span>
          </h2>

          <div className="organisers-divider">
            <span></span>
          </div>
        </div>

        {/* Organisation Logos */}
        <div className="organisations-grid">
          {organisations.map((org, index) => (
            <div className="organisation-card" key={index}>
              <img src={org.image} alt={org.name} />
            </div>
          ))}
        </div>

        {/* Contact Details */}
        <div className="organisers-contact-heading">
          <h3>GET IN TOUCH</h3>
          <p>For queries and assistance</p>
        </div>

        <div className="organisers-contact-grid">
          {organisers.map((org, index) => (
            <div className="organiser-card" key={index}>
              <h3>{org.name}</h3>

              <a href={`tel:${org.phone}`}>
                CONTACT
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Organisers;