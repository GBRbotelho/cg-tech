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
      <div className="absolute left-[-30px]">
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
          <CardUnity text="Campinas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7351.3104471369625!2d-47.044385425933825!3d-22.889191302622674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4967fa0e91%3A0x1b821ce5c2328bb9!2sCGTECH%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1731958261294!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="Indaiatuba">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5918866809757!2d-47.219514800000006!3d-23.112030999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4d031b822173%3A0x47e38cce0d24d49e!2sCGTECH%20Indaiatuba!5e0!3m2!1spt-BR!2sbr!4v1731958384877!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="São Paulo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8755509433076!2d-46.6888563!3d-23.5729127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570773d9ff1d%3A0xc7753935a0f37249!2sEdif%C3%ADcio%20Pal%C3%A1cio%20das%20Am%C3%A9ricas%20e%20Vitrine%20Iguatemy!5e0!3m2!1spt-BR!2sbr!4v1737388879704!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="São Jose dos Campos">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.31027844359!2d-45.888633899999995!3d-23.1953604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a6b749e0269%3A0xa9774a28378022c3!2sCGTECH%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sbr!4v1731958439224!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="Jundiaí">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.647386087951!2d-46.893229899999994!3d-23.1830663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf268602b22067%3A0x61666063f7191634!2sGolden%20Office!5e0!3m2!1spt-BR!2sbr!4v1752858149490!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="Alphaville">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3189440216315!2d-46.86974981371948!3d-23.48501882432476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b2bb400001%3A0xb691cfc0874b7ca0!2sAv.%20Andr%C3%B4meda%2C%20n%C2%BA%20885%20-%20Alphaville%2C%20Barueri%20-%20SP%2C%2006479-000!5e0!3m2!1spt-BR!2sbr!4v1752858294631!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
        <SwiperSlide>
          <CardUnity text="São Bernardo do Campo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1291.7273262327515!2d-46.55028156295642!3d-23.691809362952792!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20Jos%C3%A9%20Versolato%2C%20n%C2%BA%20111%2C%20sala%201112%20Torre%20B%2C%20Centro!5e0!3m2!1spt-BR!2sbr!4v1752858429071!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </CardUnity>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[102%]">
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="ri-arrow-right-circle-fill"></i>
        </button>
      </div>
    </>
  );
}

export default SwiperUnitys;
