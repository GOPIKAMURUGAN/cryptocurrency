import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import "./Calculator.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function LumpsumCalculator({ currency }) {
  const [investment, setInvestment] = useState(50000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(10);
  const [finalAmount, setFinalAmount] = useState(0);
  const [gain, setGain] = useState(0);

  // Helper function to get currency symbol
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "INR":
      default:
        return "₹";
    }
  };

  const symbol = getCurrencySymbol(currency);

  useEffect(() => {
    const result = investment * Math.pow(1 + rate / 100, years);
    setFinalAmount(result);
    setGain(result - investment);
  }, [investment, rate, years]);

  const chartData = {
    labels: ["Invested Amount", "Profit"],
    datasets: [
      {
        data: [investment, gain],
        backgroundColor: ["#007bff", "#28a745"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="calc-container">
      <h2>Lumpsum Investment Calculator</h2>

      <div className="slider-group">
        <label>Investment Amount: {symbol}{investment.toLocaleString()}</label>
        <input
          type="range"
          min="1000"
          max="1000000"
          step="1000"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
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
        <p>Total Amount: {symbol}{finalAmount.toFixed(2).toLocaleString()}</p>
        <p>Invested Amount: {symbol}{investment.toLocaleString()}</p>
        <p>Profit Gained: {symbol}{gain.toFixed(2).toLocaleString()}</p>

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

export default LumpsumCalculator;