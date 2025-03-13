/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import missao from "@/public/imgs/Home/Section1.webp";
import visao from "@/public/imgs/Sobre/carro.webp";
import valores from "@/public/imgs/Sobre/backgroundsobre.webp";
import SwiperParceiros from "../Home/components/SwiperParceiros";

function ParceirosMobile() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    console.log(windowWidth);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="bg-[#f0f7ff] flex flex-col items-center w-screen lg:hidden">
      <section className="relative top-[-20px] w-screen bgSobre text-center text-white m-0 bg-cover py-[100px] bg-center items-center justify-center flex">
        <div className="absolute w-full h-full max-h-full bg-black bg-opacity-60 top-[0px] left-0 py-[100px] z-10"></div>
        <div className="flex items-center flex-col gap-10 z-20 p-5">
          <h1 className="font-[300] leading-[55px] m-0 p-0 text-[35px]">
            Nossos Parceiros, Nossa Força
          </h1>
        </div>
      </section>
      <section className="max-w-[1400px] w-[95%] flex flex-col items-center justify-center my-10">
        <h1
          className="text-[30px] font-[800] text-center"
          data-aos="zoom-in-up"
        >
          Conheça nossos parceiros
        </h1>
        <p className="text-center text-[18px] font-[400]" data-aos="zoom-in-up">
          Contamos com uma rede de parceiros que compartilham o nosso
          compromisso em entregar sempre o melhor. Juntos, oferecemos pacotes de
          serviços personalizados para garantir que você tenha as soluções mais
          completas e eficientes ao seu alcance.
        </p>
        <div
          className={`w-[95%] ${
            windowWidth <= 700 && "max-w-[400px]"
          } my-0 flex items-center`}
          data-aos="zoom-in-up"
        >
          <SwiperParceiros slides={(windowWidth > 700 && 2) || 1} />
        </div>
      </section>
    </main>
  );
}

export default ParceirosMobile;
