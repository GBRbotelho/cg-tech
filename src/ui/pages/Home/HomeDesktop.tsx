import React from "react";
import SwiperService from "./components/SwiperService";
import Testimonial from "./components/Testimonial";
import Button from "@/ui/components/utils/Button";

function HomeDesktop() {
  return (
    <>
      <section className="w-full bcground text-center text-white h-[48vw] min-h-[600px] bg-cover bg-center items-center justify-center flex">
        <div className="flex items-center flex-col gap-10">
          <div>
            <h1 className="font-[700] leading-[55px] m-0 p-0 text-[55px]">
              O MELHOR PARA O SEU <br /> CONDOMÍNIO
            </h1>
            <p className="text-[32px] m-0 p-0">
              Soluções completas e eficientes{" "}
            </p>
          </div>
          <button className="text-[25px] bg-[#5271ff] w-fit px-5 py-1 rounded-[5px]">
            Solicitar orçamento
          </button>
        </div>
      </section>
      <section className="max-w-[1400px] w-full flex flex-col items-center justify-center my-10">
        <h1 className="text-[38px] font-[800] text-center">
          Entregando sempre o melhor para os nossos clientes
        </h1>
        <p className="text-center text-[21px] font-[400]">
          Criamos pacotes de serviços personalizados para que você tenha a
          melhor
          <br />
          solução ao seu alcance
        </p>
        <div className="w-[95%] my-0 flex items-center">
          <SwiperService />
        </div>
      </section>
      <section className="w-[95vw] rounded-[6px] py-10 my-10 max-w-[1400px] flex flex-col gradientBackground2 justify-center">
        <div className="ml-16">
          <h1 className="text-white font-[700] text-[33px]">Nossos clientes</h1>
          <p className="text-white text-[26px] w-[680px]">
            Nossos clientes sempre recebem o melhor atendimento possível, somos
            referencia em qualidade e excelência{" "}
          </p>
        </div>
        <div className="flex items-center justify-end w-[93%]">
          <Testimonial classNameCard="relative left-10 bottom-3 z-10" />
          <div className="flex flex-col gap-6">
            <Testimonial classNameCard="relative left-2" />
            <Testimonial opacity={20} classNameCard="relative left-[-15px]" />
          </div>
        </div>
        <div className="ml-16">
          <Button name="Quero ser cliente" className="px-6" />
        </div>
      </section>
      <section>Teste</section>
    </>
  );
}

export default HomeDesktop;
