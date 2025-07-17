import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19/mo",
    features: [
      { label: "1 User", included: true },
      { label: "5GB Storage", included: true },
      { label: "Community Support", included: true },
      { label: "Advanced Analytics", included: false },
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: [
      { label: "5 Users", included: true },
      { label: "50GB Storage", included: true },
      { label: "Priority Support", included: true },
      { label: "Advanced Analytics", included: true },
    ],
    buttonText: "Recommended",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: [
      { label: "Unlimited Users", included: true },
      { label: "1TB Storage", included: true },
      { label: "24/7 Support", included: true },
      { label: "Custom Integrations", included: true },
    ],
    buttonText: "Contact Us",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="container py-5 bg-dark text-white">
      <h1 className="text-center mb-5">Our Pricing Plans</h1>
      <div className="row g-4">
        {pricingPlans.map((plan, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div
              className={`card h-100 shadow border-0 ${
                plan.highlight ? "bg-primary text-white" : "bg-secondary"
              }`}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title text-center">{plan.title}</h4>
                  <h2 className="text-center my-3">{plan.price}</h2>
                  <ul className="list-unstyled">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center">
                        <span className="me-2">
                          {feat.included ? "✅" : "❌"}
                        </span>
                        {feat.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-4">
                  <button
                    className={`btn ${
                      plan.highlight ? "btn-light text-dark" : "btn-outline-light"
                    } w-100`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
