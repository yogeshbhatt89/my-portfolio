import React from "react";
import AnimatedPage from "../AnimatedPage";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Autoplay);

const Janken = () => {
  return (
    <AnimatedPage>
      <div className="flex xl:flex-row sm:flex-col xl:ml-10 space-x-14 sm:ml-0  sm:mr-20 text-blue-300 md:text-lg xl:text-2xl">
        <Swiper
          className="swiper "
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
            <img className="imgProj" src="../janken.png" alt="janken1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj" src="../janken1.png" alt="janken1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj" src="../janken2.png" alt="janken2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj" src="../janken3.png" alt="janken3" />
          </SwiperSlide>
        </Swiper>
        <div className=" textDiv text-2xl">
          Janken Coliseum is an open world rpg based on the classic rock paper
          scissors game. Janken Coliseum features a world of pickups and
          battleable NPCs.
          <br />
          <br />
          The goal of the game is to defeat everyone else without running out of
          lives to be the last one standing.
          <br />
          <br />
          <div className="text-white">TechStack:</div>
          JavaScript, Node.js, Phaser 3, Piskel, Redux, Tiled
          <br />
          <br />
          <div className="text-white">Links:</div>
          <div className="text-white flex flex-row space-x-20">
            <div className="text-blue-400 hover:text-white hover:underline">
              <a href="https://github.com/Bulbasaur-Brigade/Janken-Coliseum">
                Github
              </a>
            </div>
            <div className="text-blue-400 hover:text-white hover:underline">
              <a href="https://janken-coliseum1.herokuapp.com/">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Janken;
