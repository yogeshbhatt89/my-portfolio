import React from "react";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col mr-32 ml-32 ">
        <div className="text-center text-5xl text-white "> MY Recent Work</div>

        <div className=" flex flex-row mt-10 space-x-20  text-4xl justify">
          <div className="container relative ">
            <div className="text-center">Janken Coliseum</div>
            <img className="imgWork " src="janken.png" alt="janken" />
            <Link to="/projects/1">
              <div className="moreInfo">
                <div className="text bg-blue-300 mt-28">More Info</div>
              </div>
            </Link>
          </div>
          <div className="container relative ">
            <div className="text-center"> Clothes R US</div>
            <img className="imgWork  " src="clothes.png" alt="clothesrus" />
            <Link to="/projects/2">
              <div className="moreInfo">
                <div className="text bg-blue-300  mt-28">More Info</div>
              </div>
            </Link>
          </div>
          <div className="container relative">
            <div className="text-center">Find The Flame</div>
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
