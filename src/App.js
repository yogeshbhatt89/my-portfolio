import React from "react";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mt-48 ml-28 mr-28 ">
      <Router>
        <div className="flex flex-row max-h-full ">
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
