import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import Mobile from "./Mobile"


const Mobileslider = () => {
  return (
    <>
    
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide className="next">
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
    <SwiperSlide>
      <Mobile />
    </SwiperSlide>
  
  </Swiper>
    </>
  )
}

export default Mobileslider