import React from "react";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Janken from "./components/myProjects/Janken";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Three from "./components/Three";
import Clothes from "./components/myProjects/Clothes";
import FindTheFlame from "./components/myProjects/FindTheFlame";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Three />
      <div className="ml-28 mr-28 ">
        <Router>
          <div className="flex 2xl:flex-row sm:flex-col mt-40  mb-48 absolute mr-28">
              <SideBar />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/projects/1" element={<Janken />} />
              <Route path="/projects/2" element={<Clothes />} />
              <Route path="/projects/3" element={<FindTheFlame />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
