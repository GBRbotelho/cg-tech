import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardUnity from "./CardUnity";

type Props = {
  slides: number;
};

function SwiperUnitys(props: Props) {
  const swiperRef: any = useRef();
  return (
    <>
      <div className="absolute left-[-15px]">
        <button onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
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
          <CardUnity text="Campinas" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="Indaiatuba" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="São Paulo" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="São Jose dos Campos" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="Jundiai" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[102%]">
        <button onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
      </div>
    </>
  );
}

export default SwiperUnitys;
