
import React from "react";
import { Cpu, Wrench, Wifi, Trophy } from "lucide-react";
import "../styles/Rounds.css";

const rounds = [
  {
    number: "01",
    title: "ELECTRONICS QUIZ",
    icon: Cpu,
    topics: [
      "Basic Electronics",
      "Analog Electronics",
      "Digital Electronics",
      "IoT Fundamentals",
    ],
    tagline: "THE FIRST TRIAL",
    quote: "KNOWLEDGE IS POWER",
    decoration: "/assets/decorations/crescent.png",
    decorationClass: "crescent-decoration",
  },
  {
    number: "02",
    title: "CIRCUIT DEBUGGING",
    icon: Wrench,
    topics: [
      "Identify faults",
      "Circuit Analysis",
      "Troubleshooting",
      "Real-world scenarios",
    ],
    tagline: "THE SECOND TRIAL",
    quote: "PRECISION IS KEY",
    decoration: "/assets/decorations/gothic-star.png",
    decorationClass: "star-decoration",
  },
  {
    number: "03",
    title: "IoT MINI HACKATHON",
    icon: Wifi,
    topics: [
      "Build a working project",
      "Sensors",
      "Communication Protocols",
      "Embedded Systems",
    ],
    tagline: "THE FINAL TRIAL",
    quote: "INNOVATION PREVAILS",
    decoration: "/assets/decorations/gothic-sword.png",
    decorationClass: "sword-decoration",
  },
];

function Rounds() {
  return (
    <section className="rounds-section" id="rounds">

      <div className="rounds-heading">
        <p className="rounds-eyebrow">
          THE CHALLENGE BEGINS
        </p>

        <h2>
          <span>ROUNDS</span>
          <span className="heading-star"> ✦</span>
        </h2>

        <p className="rounds-subtitle">
          THREE ROUNDS. RISING CHALLENGES.
          ONLY THE BEST ADVANCE.
        </p>
      </div>

      <div className="rounds-container">

        {rounds.map((round) => {
          const Icon = round.icon;

          return (
            <article
              className={`round-card round-${round.number}`}
              key={round.number}
            >

              {/* Top ornamental chains */}
              <div className="card-chain">
                <span>✦</span>
                <span>✦</span>
              </div>

              {/* Top center ornament */}
              <div className="card-top-star">✦</div>

              {/* Round icon */}
              <div className="round-icon">
                <Icon size={37} strokeWidth={1.7} />
              </div>

              {/* Round number */}
              <p className="round-number">
                ROUND {round.number}
              </p>

              {/* Title */}
              <h3>{round.title}</h3>

              {/* Divider */}
              <div className="round-card-divider">
                <span>✦</span>
              </div>

              {/* Topics */}
              <ul className="round-topics">
                {round.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>

              {/* Unique artwork */}
              <img
                src={round.decoration}
                alt=""
                className={`round-decoration ${round.decorationClass}`}
              />

              {/* Bottom ornamental separator */}
              <div className="card-bottom-ornament">
                <span>❧</span>
                <span>✦</span>
                <span>❧</span>
              </div>

              {/* Trial tagline */}
              <div className="round-meta">
                <span>{round.tagline}</span>
                <span className="round-quote">
                  {round.quote}
                </span>
              </div>

            </article>
          );
        })}

      </div>

      {/* Progress timeline */}
      <div className="rounds-timeline">

        <div className="timeline-line" />

        {rounds.map((round) => (
          <div className="timeline-item" key={round.number}>

            <div className={`timeline-node node-${round.number}`}>
              {round.number === "03" ? (
                <Trophy size={19} />
              ) : (
                <span>{round.number}</span>
              )}
            </div>

            <h4>ROUND {round.number}</h4>

            <p>
              {round.number === "01"
                ? "All registered teams"
                : round.number === "02"
                ? "Shortlisted teams"
                : "Final shortlisted teams"}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Rounds;
