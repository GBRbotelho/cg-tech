import React from "react";
import SwiperService from "./components/SwiperService";

function HomeDesktop() {
  return (
    <>
      <section className="w-full bcground text-center text-white h-[48vw] min-h-[500px] bg-cover bg-center items-center justify-center flex">
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
      <section className="max-w-[1400px] w-full flex flex-col items-center justify-center">
        <h1 className="text-[38px] font-[700] text-center">
          Entregando sempre o melhor para os nossos clientes
        </h1>
        <p className="text-center text-[21px] font-[400]">
          Criamos pacotes de serviços personalizados para que você tenha a
          melhor
          <br />
          solução ao seu alcance
        </p>
        <div className="w-[90%]">
          <SwiperService />
        </div>
      </section>
    </>
  );
}

export default HomeDesktop;
