import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col mt-20 text-5xl min-w-max ">
      <div className="m-2">
        <Link to="/projects">MY PROJECTS</Link>
      </div>
      <div className="m-2">
        <Link to="/">ABOUT ME</Link>
      </div>
      <div className="m-2">
        <Link to="/contact">CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Navbar;
