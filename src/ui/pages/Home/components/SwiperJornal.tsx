import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardJornal from "./CardJornal";

type Props = {
  slides: number;
};

function SwiperJornal(props: Props) {
  const swiperRef: any = useRef();
  return (
    <>
      <div className="absolute left-[-0px]">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <i className="ri-arrow-left-circle-fill"></i>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={props.slides}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          <CardJornal src="/img/sectionHome/jornal.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardJornal src="/img/sectionHome/bolsa.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardJornal src="/img/sectionHome/plano.jpeg" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[101%]">
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="ri-arrow-right-circle-fill"></i>
        </button>
      </div>
    </>
  );
}

export default SwiperJornal;
