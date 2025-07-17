import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";

function App() {
  const [currency, setCurrency] = useState("inr");

  return (
    <Router>
      <Navbar currency={currency} setCurrency={setCurrency} />
      <Routes>
        <Route path="/" element={<Home currency={currency} />} />
        <Route path="/features" element={<Features currency={currency} />} />
        <Route path="/pricing" element={<Pricing />} />
        
      </Routes>
    </Router>
  );
}

export default App;
