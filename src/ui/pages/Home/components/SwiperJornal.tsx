import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardJornal from "./CardJornal";
import Link from "next/link";

type Props = {
  slides: number;
};

function SwiperJornal(props: Props) {
  const swiperRef: any = useRef();

  return (
    <div className="relative w-full">
      <button
        className="absolute top-1/2 left-0 z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <i className="ri-arrow-left-circle-fill text-3xl"></i>
      </button>

      <div className="px-10">
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
            <Link
              href={"https://heyzine.com/flip-book/745e2bb4b7.html"}
              target="_blank"
            >
              <CardJornal src="/img/sectionHome/jornal.jpeg" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <CardJornal src="/img/sectionHome/bolsa.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"http://179.191.96.206:8181/GesOperWeb/selfun.portal.aspx"}
              target="_blank"
            >
              <CardJornal src="/img/sectionHome/plano.jpeg" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        className="absolute top-1/2 right-0 z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <i className="ri-arrow-right-circle-fill text-3xl"></i>
      </button>
    </div>
  );
}

export default SwiperJornal;
