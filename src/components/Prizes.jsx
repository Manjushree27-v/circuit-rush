import React from "react";
import "../styles/Prizes.css";

const Prizes = () => {
  const prizes = [
    { position: "2ND", title: "PRIZE", icon: "♜", className: "second" },
    { position: "1ST", title: "PRIZE", icon: "♛", className: "first" },
    { position: "3RD", title: "PRIZE", icon: "♜", className: "third" },
  ];

  const rewards = [
    {
      icon: "✧",
      title: "Participation Certificates",
      description: "For all participants",
    },
    {
      icon: "％",
      title: "IEEE Member Discounts",
      description: "Exclusive benefits",
    },
    {
      icon: "☆",
      title: "Exciting Goodies",
      description: "More surprises await",
    },
  ];

  return (
    <section className="prizes-section" id="prizes">
      <div className="prizes-content">

        {/* Heading */}
        <div className="prizes-heading">
          <h2>PRIZES <span>&</span> REWARDS</h2>
          <p>IDEAS DESERVE RECOGNITION</p>
        </div>

        {/* Total Prize Pool */}
        <div className="prize-pool">
          <span className="pool-label">THE GRAND REWARD</span>
          <h3>₹10,000</h3>
          <p>TOTAL PRIZE POOL</p>
        </div>

        {/* Prize Cards */}
        <div className="prize-cards">
          {prizes.map((prize) => (
            <div
              className={`prize-card ${prize.className}`}
              key={prize.position}
            >
              <div className="prize-icon">{prize.icon}</div>

              <h3>{prize.position}</h3>
              <h4>{prize.title}</h4>

              <div className="prize-card-divider">
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="prizes-divider">
          <span>✦</span>
        </div>

        {/* Additional Rewards */}
        <div className="additional-rewards">
          {rewards.map((reward) => (
            <div className="reward-item" key={reward.title}>
              <div className="reward-icon">{reward.icon}</div>
              <h4>{reward.title}</h4>
              <p>{reward.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Prizes;