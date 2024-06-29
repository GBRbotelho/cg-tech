import React, { useEffect, useState } from "react";
import SwiperService from "./components/SwiperService";
import Testimonial from "./components/Testimonial";
import Button from "@/ui/components/utils/Button";
import CardPortal from "./components/CardPortal";
import SwiperUnitys from "./components/SwiperUnitys";

function HomeMobile() {
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
  }, []);

  return (
    <main className="bg-[#f5f5f5] flex flex-col items-center w-screen lg:hidden">
      <section className="w-full bcground text-center text-white h-[48vw] min-h-[500px] max-h-[700px] bg-cover bg-center items-center justify-center flex">
        <div className="flex items-center flex-col gap-10">
          <div className="w-[95%]">
            <h1 className="font-[700] leading-[55px] m-0 p-0 text-[43px]">
              O MELHOR PARA O SEU CONDOMÍNIO
            </h1>
            <p className="text-[30px] m-0 p-0">
              Soluções completas e eficientes{" "}
            </p>
          </div>
          <button className="text-[25px] bg-[#5271ff] w-fit px-5 py-1 rounded-[5px]">
            Solicitar orçamento
          </button>
        </div>
      </section>
      <section className="max-w-[1400px] justify-center w-[90%] flex flex-col items-center gap-10 my-10">
        <div className="w-full h-full min-h-[600px] flex flex-col gap-5 justify-center">
          <div>
            <h1 className="text-[38px] font-[800]">Sobre a CGTECH</h1>
            <p className="text-[21px]">Uma família que cuida da sua família!</p>
          </div>
          <p className="text-[21px]">
            Só quem tem mais de 20 anos de experiência no segmento e as melhores
            tecnologias pode garantir a sua segurança e de sua família.
          </p>
          <div className="bg-black h-[380px] max-w-[500px]"></div>
        </div>
        <div className="w-full h-full flex flex-col justify-start gap-12">
          <div className="bg-black h-[300px]"></div>
          <div className="flex flex-col gap-8">
            <p className="text-[21px]">Uma família que cuida da sua família!</p>
            <p className="text-[21px]">
              Só quem tem mais de 20 anos de experiência no segmento e as
              melhores tecnologias pode garantir a sua segurança e de sua
              família.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] w-[95%] flex flex-col items-center justify-center my-10">
        <h1 className="text-[38px] font-[800] text-center">
          Entregando sempre o melhor para os nossos clientes
        </h1>
        <p className="text-center text-[21px] font-[400]">
          Criamos pacotes de serviços personalizados para que você tenha a
          melhor
          <br />
          solução ao seu alcance
        </p>
        <div
          className={`w-[95%] ${
            windowWidth <= 700 && "max-w-[400px]"
          } my-0 flex items-center`}
        >
          <SwiperService slides={(windowWidth > 700 && 2) || 1} />
        </div>
      </section>

      <section className="w-[95vw] rounded-[6px] items-center gap-5 py-10 my-10 max-w-[1400px] flex flex-col gradientBackground2 justify-center">
        <div className="ml-16">
          <h1 className="text-white font-[700] text-[33px]">Nossos clientes</h1>
          <p className="text-white text-[26px] w-[90%]">
            Nossos clientes sempre recebem o melhor atendimento possível, somos
            referencia em qualidade e excelência{" "}
          </p>
        </div>
        <div className="flex items-center flex-col gap-5 w-[93%]">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
        <div className="ml-16">
          <Button name="Quero ser cliente" className="px-6" />
        </div>
      </section>
      <section className="w-[95%] rounded-[6px] my-10 max-w-[1400px] flex flex-col justify-center items-center">
        <h1 className="font-[700] text-[36px]">Ultimas Novidades do Portal</h1>
        <p className="text-[24px]">
          Se mantenha sempre atualizado sobre o mundo da segurança e facilities
        </p>
        <div className="flex w-[95%] mt-14 flex-col justify-center items-center">
          <div className="w-full max-w-[500px]">
            <CardPortal />
            <CardPortal reverse={true} />
          </div>
          <div className="w-full max-w-[500px]">
            <CardPortal />
            <CardPortal reverse={true} />
          </div>
        </div>
      </section>
      <section
        className={`relative  w-[95%] flex flex-col items-center justify-center my-10`}
      >
        <h1 className="font-[700] w-[90%] text-[36px]">Nossas unidades</h1>
        <div
          className={`relative w-[80%] ${
            windowWidth < 500 && "max-w-[200px]"
          } my-0 flex items-center`}
        >
          <SwiperUnitys
            slides={
              (windowWidth > 700 && 3) ||
              (windowWidth <= 700 && windowWidth > 500 && 2) ||
              1
            }
          />
        </div>
      </section>
    </main>
  );
}

export default HomeMobile;
