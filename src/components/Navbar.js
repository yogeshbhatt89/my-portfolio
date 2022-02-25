import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/projects">My Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
