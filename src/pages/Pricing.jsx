import React, { useState } from "react";


import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  


  const pricingData = {
    monthly: [
      {
        title: "Free",
        price: "$0",
        features: ["1 user", "Basic support", "Email reports"],
        buttonText: "Buy Now",
      },
      {
        title: "Professional",
        price: "$29",
        features: ["5 users", "Priority support", "Advanced reports"],
        buttonText: "Buy Now",
        highlight: true,
      },
      {
        title: "Enterprise",
        price: "$99",
        features: ["Unlimited users", "Dedicated support", "Custom reports"],
        buttonText: "Buy Now",
      },
    ],
    yearly: [
      {
        title: "Free",
        price: "$0",
        features: ["1 user", "Basic support", "Email reports"],
        buttonText: "Buy Now",
      },
      {
        title: "Professional",
        price: "$290",
        features: ["5 users", "Priority support", "Advanced reports"],
        buttonText: "Buy Now",
        highlight: true,
      },
      {
        title: "Enterprise",
        price: "$990",
        features: ["Unlimited users", "Dedicated support", "Custom reports"],
        buttonText: "Buy Now",
      },
    ],
  };

  const plans = pricingData[billingCycle];

  return (
    <div className="pricing-wrapper">
      <h1 className="pricing-title">Pricing Plans</h1>

      
      <div className="toggle-container">
        <span className={billingCycle === "monthly" ? "active" : ""}>
          Monthly
        </span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          />
          <span className="slider round"></span>
        </label>
        <span className={billingCycle === "yearly" ? "active" : ""}>
          Yearly
        </span>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card ${plan.highlight ? "card-highlight" : ""}`}
          >
            {billingCycle === "yearly" && plan.title === "Professional" && (
              <div className="badge-discount">Save 20%</div>
            )}

            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              <span className="price-animate">{plan.price}</span>
              <span>/ {billingCycle === "monthly" ? "mo" : "yr"}</span>
            </p>

            <hr />
            <ul className="plan-features">
              {plan.features.map((feat, i) => (
                <li key={i}>
                  <FaCheck className="check-icon" /> {feat}
                </li>
              ))}
            </ul>
            <button className="plan-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
            <footer className="contact-footer">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </footer>

    </div>
  );
};

export default Pricing;
