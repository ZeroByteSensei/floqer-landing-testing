import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "./base.css";

// import required modules
import { Pagination } from "swiper/modules";
// import Slide from "./SwipeSmaller/Slide";

import { reviews } from "@/public/assets/constants";

export default function SwipeBase() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper swiper-second h-full w-screen"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide className="w-[94%] sm:w-4/5 md:w-3/5 max-w-[878px] !h-[95vh] sm:!h-[420px] md:!h-[383px] wall-comment-second swiper-slide-second" key={idx}>
            <div className="wall-comment-inner-second">
              <span className="text-7xl text-[#8F76D1] font-secondary font-bold pb-[-1rem]">{`“`}</span>
              <span className="text-3xl font-secondary text-secondary font-semibold mt-[-1rem]">
                {review.heading}
              </span>
              <div className="wall-comment-content-second">{review.subHeading}</div>
              <span
                className="text-7xl text-[#8F76D1] font-secondary font-bold"
                style={{ lineHeight: 0.8 }}
              >{`”`}</span>
              <div className="wall-comment-user-second">
                <div>
                  <div className="wall-comment-user-name-second">
                    {review.userName}
                  </div>
                  <div className="wall-comment-user-title-second">{review.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
