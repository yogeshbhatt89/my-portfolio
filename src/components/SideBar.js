import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col mt-32 text-5xl min-w-max text-center">
      <div className=" btn m-2 mb-4">
        <Link to="/">ABOUT</Link>
      </div>
      <div className="btn m-2 mb-4">
        <Link to="/projects">PROJECTS</Link>
      </div>

      <div className="btn m-2 mb-4">
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default SideBar;
