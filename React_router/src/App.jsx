import { useState, StrictMode } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Purple from "./components/Purple";
import Pink from "./components/Pink";
import Home from "./components/Home";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/purple">Purple</Link>
        <Link to="/pink">Pink</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/purple" element={<Purple />}></Route>
          <Route path="/pink" element={<Pink />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
