import React from "react";
import AnimatedPage from "./AnimatedPage";

const AboutMe = () => {
  return (
    <AnimatedPage>
      <div className=" about flex flex-row ">
        <div className="mr-32 ml-32 mt-28  text-2xl">
          HI!~ I'M A SOFTWARE DEVELOPER FROM NEW YORK WHO LOVES CREATING WEB
          APPLICATIONS. CURRENTLY OPEN TO NETWORK.
          <br />
          <br />
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
          className="object-none mr-20"
          src="https://avatars.githubusercontent.com/u/61337526?v=4"
          alt="portrait"
        />
      </div>
    </AnimatedPage>
  );
};

export default AboutMe;
