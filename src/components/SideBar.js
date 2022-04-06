import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex 2xl:flex-col sm:justify-center 2xl:justify-evenly sm:flex-row mt-28 sm:mt-0  text-5xl min-w-max text-center ">
      <Link to="/">
        <div className=" btn m-2 mb-4">ABOUT</div>
      </Link>
      <Link to="/projects">
        <div className="btn m-2 mb-4">PROJECTS</div>
      </Link>

      <Link to="/contact">
        <div className="btn m-2 mb-4">CONTACT</div>
      </Link>
    </div>
  );
};

export default SideBar;
