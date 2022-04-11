import React from "react";
import AnimatedPage from "../AnimatedPage";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Autoplay);

const FindTheFlame = () => {
  return (
    <AnimatedPage>
      <div className="flex xl:flex-row sm:flex-col xl:ml-10 space-x-14 sm:ml-0  sm:mr-20 text-blue-300 md:text-lg xl:text-2xl">
        <Swiper
          className="swiper"
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img className="imgProj  " src="../imagefind.png" alt="imagefind" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj "
              src="../imagefind1.png"
              alt="imagefind1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj "
              src="../imagefind2.png"
              alt="imagefind2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj "
              src="../imagefind3.png"
              alt="imagefind3"
            />
          </SwiperSlide>
        </Swiper>
        <div className="textDiv  text-2xl">
          FindTheFlame is a Platformer web game based on phaser framework.
          Objective of the game is to get through several stages and get to the
          flame in each stage.
          <br />
          Every stage has traps, platforms and a flame. Once you touch the flame
          you get to the next stage.
          <br />
          <br />
          <div className="text-white">TechStack:</div>
          JavaScript, Node.js, Express, Phaser, , Webpack and deployed on
          Heroku.
          <br />
          <br />
          <div className="text-white">Links:</div>
          <div className="text-white flex flex-row space-x-20">
            <div className="text-blue-400 hover:text-white hover:underline">
              <a target="_blank"
          rel="noreferrer" href="https://github.com/yogeshbhatt89/findTheFlamePhaser">
                Github
              </a>
            </div>
            <div className="text-blue-400 hover:text-white hover:underline">
              <a target="_blank"
          rel="noreferrer" href="https://findtheflamephaser.herokuapp.com/public/">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default FindTheFlame;
