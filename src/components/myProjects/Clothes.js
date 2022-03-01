import React from "react";
import AnimatedPage from "../AnimatedPage";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Autoplay);

const Clothes = () => {
  return (
    <AnimatedPage>
      <div className="flex  flex-row ml-10 space-x-14 ">
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
            <img className="imgProj  " src="../clothes.png" alt="clothes" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj " src="../clothes1.png" alt="clothes1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj " src="../clothes2.png" alt="clothes2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj " src="../clothes3.png" alt="clothes3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgProj " src="../clothes4.png" alt="clothes4" />
          </SwiperSlide>
        </Swiper>
        <div className="textDiv  text-2xl">
          Clothes are us is an e-commerce web application. Website allows users
          to buy various products. Users can add items to their cart, remove
          items as well as update the product quantity. During checkout users
          can complete their purchase by using stripe checkout.
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
