import React, { useState } from "react";
import LumpsumCalculator from "./calculators/LumpsumCalculator";
import SIPCalculator from "./calculators/SIPCalculator";
import "./calculators/Calculator.css";

function CalculatorToggle({ currency }) {
  const [activeTab, setActiveTab] = useState("lumpsum");

  return (
    <div className="calculator-wrapper">
      <div className="tab-buttons">
        <button
          className={activeTab === "lumpsum" ? "active" : ""}
          onClick={() => setActiveTab("lumpsum")}
        >
          Lumpsum
        </button>
        <button
          className={activeTab === "sip" ? "active" : ""}
          onClick={() => setActiveTab("sip")}
        >
          SIP
        </button>
      </div>

      <div className="calculator-box">
        {activeTab === "lumpsum" ? (
          <LumpsumCalculator currency={currency} />
        ) : (
          <SIPCalculator currency={currency} />
        )}
      </div>
    </div>
  );
}

export default CalculatorToggle;
