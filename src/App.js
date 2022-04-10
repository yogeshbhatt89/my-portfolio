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
      <div className="">
        <div className="flex 2xl:flex-row sm:flex-col mt-40  mb-40 absolute mr-28 ml-20">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/projects/1" element={<Janken />} />
              <Route path="/projects/2" element={<Clothes />} />
              <Route path="/projects/3" element={<FindTheFlame />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
