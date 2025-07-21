import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./Calculator.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function SIPCalculator({ currency }) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [finalAmount, setFinalAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [gain, setGain] = useState(0);

  // ✅ Get the symbol based on the currency
  const getCurrencySymbol = (currencyCode) => {
    switch (currencyCode?.toLowerCase()) {
      case "usd":
        return "$";
      case "eur":
        return "€";
      case "inr":
      default:
        return "₹";
    }
  };

  const symbol = getCurrencySymbol(currency);

  useEffect(() => {
    const months = years * 12;
    const r = rate / 100 / 12;
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    const totalInvested = monthlyInvestment * months;
    const totalGain = futureValue - totalInvested;

    setFinalAmount(futureValue);
    setInvestedAmount(totalInvested);
    setGain(totalGain);
  }, [monthlyInvestment, rate, years]);

  const chartData = {
    labels: ["Invested Amount", "Profit"],
    datasets: [
      {
        data: [investedAmount, gain],
        backgroundColor: ["#007bff", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="calc-container">
      <h2>SIP Investment Calculator</h2>

      <div className="slider-group">
        <label>
          Monthly SIP Amount: {symbol}
          {monthlyInvestment.toLocaleString()}
        </label>
        <input
          type="range"
          min="500"
          max="100000"
          step="500"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Expected Return Rate: {rate}%</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Time Period: {years} years</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>

      <div className="result">
        <h3>Expected Returns</h3>
        <p>
          Total Value: {symbol}
          {finalAmount.toFixed(2).toLocaleString()}
        </p>
        <p>
          Invested Amount: {symbol}
          {investedAmount.toFixed(2).toLocaleString()}
        </p>
        <p>
          Profit Gained: {symbol}
          {gain.toFixed(2).toLocaleString()}
        </p>

        <div className="result-chart">
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    font: {
                      size: 12,
                    },
                  },
                },
              },
            }}
            style={{ width: "250px", height: "250px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SIPCalculator;
