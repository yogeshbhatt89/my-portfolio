import React from "react";
import AnimatedPage from "./AnimatedPage";

const AboutMe = () => {
  return (
    <AnimatedPage>
      <div className=" flex flex-row xl:mr-32 xl:ml-32   sm:mr-10 sm:ml-10  text-2xl text-blue-300 md:text-lg xl:text-2xl tall:text-sm ">
        <div className="mt-14 ">
          HI!~ I'M A SOFTWARE DEVELOPER FROM NEW YORK WHO LOVES CREATING WEB
          APPLICATIONS. CURRENTLY OPEN TO NETWORK.
          <br /> <br />
          <div className="text-white">TechStack:</div> JavaScript, HTML, CSS,
          Node, Express, React, Redux, Sequelize, PostgreSQL, Git, Github,
          Phaser
          <br />
          <br />
          <div className="text-white">Knowledgeable:</div> Unity, Tailwind,
          Socket.io, Mocha, Flexbox, Heroku, SQL.
        </div>

        <img
          id="portrait"
          className="object-none sm:mt-14 xl:mt-0"
          src="https://avatars.githubusercontent.com/u/61337526?v=4"
          alt="portrait"
        />
      </div>
    </AnimatedPage>
  );
};

export default AboutMe;
