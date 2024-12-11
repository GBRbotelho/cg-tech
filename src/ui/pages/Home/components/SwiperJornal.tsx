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
      {/* Botão para ir ao slide anterior */}
      <button
        className="absolute top-1/2 left-0 z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <i className="ri-arrow-left-circle-fill text-3xl"></i>
      </button>

      {/* Swiper */}
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
            <Link href={"https://heyzine.com/flip-book/7761ca8eb5.html"}>
              <CardJornal src="/img/sectionHome/jornal.jpeg" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"http://179.191.96.206:8181/GesOperWeb/selfun.portal.aspx"}
            >
              <CardJornal src="/img/sectionHome/bolsa.jpeg" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <CardJornal src="/img/sectionHome/plano.jpeg" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Botão para ir ao próximo slide */}
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
