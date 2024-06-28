import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardUnity from "./CardUnity";

function SwiperUnitys() {
  const swiperRef: any = useRef();
  return (
    <>
      <div className="absolute left-[-2%]">
        <button onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          <CardUnity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity />
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[102%]">
        <button onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
      </div>
    </>
  );
}

export default SwiperUnitys;
