import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";
const Projects = () => {
  const [more, showMore] = useState(false);
  function onClick() {
    if (!more) {
      showMore(true);
    } else {
      showMore(false);
    }
  }
  return (
    <AnimatedPage>
      <div className="flex flex-col mr-20 ml-20 text-blue-300 xl:mt-0 sm:mt-14">
        <div className="flex flex-row justify-between text-center h-10">
          <div className="text-center text-5xl text-white justify-center  items-center ">
            MY Recent Work
          </div>
          <button onClick={onClick}>
            More Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <div>{more ? <p>More coming soon...</p> : null}</div>
          </button>
        </div>

        <div className=" flex xl:flex-row  sm:flex-col mt-10 xl:space-x-14 sm:ml-20 sm:mr-20 text-4xl ">
          <div className="container relative ">
            {/* <div className="text-center">Janken Coliseum</div> */}
            <img className="imgWork " src="janken.png" alt="janken" />
            <Link to="/projects/1">
              <div className="moreInfo">
                <div className="text bg-blue-300 mt-28">More Info</div>
              </div>
            </Link>
          </div>
          <div className="container relative ">
            {/* <div className="text-center"> Clothes R US</div> */}
            <img className="imgWork  " src="clothes.png" alt="clothesrus" />
            <Link to="/projects/2">
              <div className="moreInfo">
                <div className="text bg-blue-300  mt-28">More Info</div>
              </div>
            </Link>
          </div>
          <div className="container relative">
            {/* <div className="text-center">Find The Flame</div> */}
            <img className="imgWork " src="imagefind.png" alt="findtheflame" />
            <Link to="/projects/3">
              <div className="moreInfo">
                <div className="text bg-blue-300  mt-28">More Info</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
