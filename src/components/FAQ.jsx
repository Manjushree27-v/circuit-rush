
import React, { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "Who can participate in Circuit Rush?",
    answer:
      "All BE/B.Tech students from any branch are eligible to participate.",
  },
  {
    question: "What is the registration fee?",
    answer:
       "The registration fee is ₹200 per team. A discounted fee of ₹150 per team is applicable only if BOTH team members hold valid IEEE membership.",
  },
  {
    question: "Will food be provided during the event?",
    answer:
      "No, food will not be provided. Participants are requested to have breakfast before arriving and make their own arrangements for lunch.",
  },
  {
    question: "Should we bring our own laptops?",
    answer: "Yes, participants are requested to bring their own laptops.",
  },
  {
    question: "Will the required components be provided?",
    answer:
      "Yes! All the necessary components required for the event will be provided. Participants do not need to bring any components.",
  },
  {
    question: "Do both team members need to be from the same branch?",
    answer:
      "No. Students from different branches can form a team.",
  },
  {
    question: "On what domain will the Circuit Debugging round be conducted?",
    answer:
      "The Circuit Debugging round will be based on Analog Electronics.",
  },
  {
    question: "Will mobile phones be allowed during the competition?",
    answer:
      "The use of mobile phones during Rounds 1 and 2 is strictly prohibited. Violation of this rule may lead to disqualification.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* HEADING */}
        <div className="faq-heading">
          <span className="faq-eyebrow">
            EVERYTHING YOU NEED TO KNOW
          </span>

          <h2>
            FREQUENTLY ASKED <span>QUESTIONS</span>
          </h2>

          <div className="faq-divider">
            <span>✦</span>
          </div>

          <p>
            Have questions before entering the arena?
            Find your answers here.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question-text">
                  {faq.question}
                </span>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer-wrapper ${
                  activeIndex === index ? "open" : ""
                }`}
                id={`faq-answer-${index}`}
              >
                <div className="faq-answer">
                  {faq.answer && <p>{faq.answer}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="faq-footer">
          <span>✦</span>
          STILL HAVE QUESTIONS? GET IN TOUCH WITH OUR ORGANISERS.
          <span>✦</span>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
