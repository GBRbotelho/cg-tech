import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";

type Props = {
  slides: number;
};

function SwiperService(props: Props) {
  const swiperRef: any = useRef();
  return (
    <>
      <div className="left-[-10px]">
        <button onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={props.slides}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          {({ isVisible }) => <Card active={isVisible ? true : false} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => <Card active={isVisible ? true : false} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => <Card active={isVisible ? true : false} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => <Card active={isVisible ? true : false} />}
        </SwiperSlide>
      </Swiper>
      <div className="rigth-0">
        <button onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
      </div>
    </>
  );
}

export default SwiperService;
