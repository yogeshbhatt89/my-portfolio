import React from "react";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">HELLO WORLD</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
