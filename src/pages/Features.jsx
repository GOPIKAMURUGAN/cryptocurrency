import React, { useState, useEffect } from "react";
import { fetchCoins } from "../services/cryptoAPI";
import CalculatorTabs from "../components/CalculatorTabs";

const Features = ({ currency }) => {
  const [coins, setCoins] = useState([]);
  // const [currency] = useState("usd");
  const currencySymbol =
    currency === "usd" ? "$" : currency === "eur" ? "€" : "₹";
  const [filter, setFilter] = useState("All");

  const investments = [
  {
    company: "TCS",
    coinId: "bitcoin",
    category: "Top",
    amountInvested: 1000,
    initialPrice: 25000, 
  },
  {
    company: "Wipro",
    coinId: "ethereum",
    category: "Mid",
    amountInvested: 700,
    initialPrice: 250, 
  },
  {
    company: "Infosys",
    coinId: "ripple",
    category: "Small",
    amountInvested: 300,
    initialPrice: 450, 
  },
  {
    company: "HCL",
    coinId: "dogecoin",
    category: "Top",
    amountInvested: 500,
    initialPrice: 0.05, 
  },
  {
    company: "Tech Mahindra",
    coinId: "cardano",
    category: "Mid",
    amountInvested: 400,
    initialPrice: 0.30, 
  },
];

  useEffect(() => {
    const loadCoins = async () => {
      const data = await fetchCoins(currency);
      setCoins(data);
    };
    loadCoins();
  }, [currency]);

  const getCoinData = (coinId) => {
    if (!coins || coins.length === 0) return null;
    return coins.find((coin) => coin.id === coinId);
  };

  const filteredInvestments =
    filter === "All"
      ? investments
      : investments.filter((inv) => inv.category === filter);

  return (
    <div className="container my-5" style={{ color: "black" }}>
      <h2 className="mb-4">Investment Insights</h2>

      {/* Dropdown Filter */}
      <div className="mb-4">
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Top">Top Companies</option>
          <option value="Mid">Mid Companies</option>
          <option value="Small">Small Companies</option>
        </select>
      </div>

      {/* Cards Section */}
      <div className="row">
        {filteredInvestments.map((entry, idx) => {
          const coin = getCoinData(entry.coinId);

          if (!coin || !coin.current_price) {
            console.warn("Missing coin or price:", entry.coinId, coin);
            return null;
          }

          const coinsOwned = entry.amountInvested / entry.initialPrice;
          const currentValue = coinsOwned * coin.current_price;
          const gainLoss = currentValue - entry.amountInvested;

          console.log({
            coinId: entry.coinId,
            coinName: coin.name,
            invested: entry.amountInvested,
            currentPrice: coin.current_price,
            coinsOwned,
            currentValue,
            gainLoss,
          });

          return (
            <div className="col-md-4 mb-4" key={idx}>
              <div
                className="card text-white"
                style={{ backgroundColor: "#1e1e2f", borderRadius: "12px" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      width="30"
                      height="30"
                      className="me-2"
                    />
                    <h5 className="card-title mb-0">{entry.company}</h5>
                  </div>
                  <p className="mb-1">
                    <strong>Coin:</strong> {coin.name}
                  </p>
                  <p className="mb-1">
                    <strong>Invested:</strong> {currencySymbol}
                    {entry.amountInvested.toFixed(2)}
                  </p>
                  <p className="mb-1">
                    <strong>Current Value:</strong> {currencySymbol}
                    {currentValue.toFixed(2)}
                  </p>
                  <p className="mb-1">
                    <strong>Profit:</strong>{" "}
                    <span
                      style={{ color: gainLoss >= 0 ? "lightgreen" : "red" }}
                    >
                      {currencySymbol}
                      {gainLoss.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CalculatorTabs />
      {/* <SIPCalculator />
  <LumpsumCalculator /> */}
  

    </div>
  );
};

export default Features;
