import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feature from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AuthForm from "./components/AuthForm";

function App() {
  const [currency, setCurrency] = useState("inr");

  return (
    <Router>
      <Navbar currency={currency} setCurrency={setCurrency} />
      <Routes>
        <Route path="/" element={<Home currency={currency} />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/features" element={<Feature currency={currency} />} />
        <Route path="/pricing" element={<Pricing  cuurency={currency} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

      </Routes>
    </Router>
  );
}

export default App;