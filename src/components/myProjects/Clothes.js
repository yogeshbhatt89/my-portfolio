import React from "react";
import AnimatedPage from "../AnimatedPage";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Autoplay);

const Clothes = () => {
  return (
    <AnimatedPage>
      <div className="flex  flex-row ml-20 mr-48">
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
            <img
              className="imgProj  mt-16"
              src="../clothes.png"
              alt="janken1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj  mt-16"
              src="../janken1.png"
              alt="janken1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj  mt-16"
              src="../janken2.png"
              alt="janken2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgProj  mt-16"
              src="../janken3.png"
              alt="janken3"
            />
          </SwiperSlide>
        </Swiper>
        <div className="mr-32 ml-32 mt-16  text-2xl">
          Clothes are us is an e-commerce web application. It utilizes
          pagination and search technologies using react hooks. Website allows
          users to buy various products. Users can add items to their cart,
          remove items as well as update the product quantity. During checkout
          users can complete their purchase by using stripe checkout.
          <br />
          <br />
          <div className="text-white">TechStack:</div>
          JavaScript, Node.js, Express, Tailwind.css, Redux, Swiper.js, React,
          React confetti, PostgreSQL, Webpack and deployed on Heroku.
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

export default Clothes;
