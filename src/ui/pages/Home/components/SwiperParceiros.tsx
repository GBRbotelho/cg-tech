import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardParceiros from "./CardParceiros";
import Image from "next/image";

import cftv from "../../../../public/imgs/Home/cftv.webp";
import controle from "../../../../public/imgs/Home/controle.webp";
import portaria from "../../../../public/imgs/Home/portaria.webp";
import segurancapatrimonial from "../../../../public/imgs/Home/segurancapatrimonial.webp";
import supervisor from "../../../../public/imgs/Home/supervisor.webp";
import limpeza from "../../../../public/imgs/Home/limpeza.webp";
import jardineiro from "../../../../public/imgs/Home/jardineiro.webp";
import manutencao from "../../../../public/imgs/Home/manutencao.webp";
import zeladoria from "../../../../public/imgs/Home/zeladoria.webp";
import gerente from "@/public/imgs/Sobre/backgroundsobre.webp";
import adm from "../../../../public/imgs/Home/adm.webp";

type Props = {
  slides: number;
};

function SwiperParceiros(props: Props) {
  const swiperRef: any = useRef();
  return (
    <>
      {/* <div className="left-[-20px]">
        <button onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
      </div> */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={props.slides}
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          {({ isVisible }) => (
            <CardParceiros
              label="Cg Tech Segurança"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            >
              <Image
                src={segurancapatrimonial}
                alt="Segurança Patrimonial"
                className="w-full h-full object-fill image-zoom"
              />
            </CardParceiros>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <CardParceiros
              label="Cg Tech Segurança"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            >
              <Image
                src={segurancapatrimonial}
                alt="Segurança Patrimonial"
                className="w-full h-full object-fill image-zoom"
              />
            </CardParceiros>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <CardParceiros
              label="Cg Tech Segurança"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            >
              <Image
                src={segurancapatrimonial}
                alt="Segurança Patrimonial"
                className="w-full h-full object-fill image-zoom"
              />
            </CardParceiros>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <CardParceiros
              label="Cg Tech Segurança"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            >
              <Image
                src={segurancapatrimonial}
                alt="Segurança Patrimonial"
                className="w-full h-full object-fill image-zoom"
              />
            </CardParceiros>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <CardParceiros
              label="Cg Tech Segurança"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            >
              <Image
                src={segurancapatrimonial}
                alt="Segurança Patrimonial"
                className="w-full h-full object-fill image-zoom"
              />
            </CardParceiros>
          )}
        </SwiperSlide>
      </Swiper>
      {/* <div className="rigth-0">
        <button onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
      </div> */}
    </>
  );
}

export default SwiperParceiros;
