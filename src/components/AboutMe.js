import React from "react";
import AnimatedPage from "./AnimatedPage";

const AboutMe = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-row">
        <div className="mr-32 ml-32 mt-20  text-2xl">
          I'M A SOFTWARE DEVELOPER WHO LOVES CREATING WEB APPLICATIONS. I AM
          LOOKING FORWARD TO UTILIZING WHAT I HAVE LEARNED AND FINDING
          OPPORTUNITIES WHERE I CAN SOLVE TECHNICAL PROBLEMS AND BUILD AMAZING
          WEB APPLICATIONS. CURRENTLY OPEN TO NETWORK.
        </div>
        <img
          className="object-none"
          src="https://avatars.githubusercontent.com/u/61337526?v=4"
          alt="portrait"
        />
      </div>
    </AnimatedPage>
  );
};

export default AboutMe;
