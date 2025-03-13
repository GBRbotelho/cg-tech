import React from "react";
import SwiperParceiros from "../Home/components/SwiperParceiros";

function ParceirosDesktop() {
  return (
    <main className="bg-[#f0f7ff] hidden flex-col items-center w-screen lg:flex">
      <section className="w-screen bgSobre text-center text-white h-[45vw] min-h-[550px] max-h-[550px] bg-cover bg-center items-center justify-center flex">
        <div className="absolute w-screen h-[45vw] min-h-[550px] max-h-[550px] bg-black bg-opacity-80 top-0 left-0 z-10"></div>
        <div className="flex items-center flex-col h-[60%] justify-end gap-5 z-20 px-5">
          <h1 className="text-[38px] font-[40000] text-center">
            Nossos Parceiros, Nossa Força
          </h1>
        </div>
      </section>
      <section
        className="max-w-[1400px] w-full flex flex-col items-center justify-center my-10"
        data-aos="zoom-in-up"
      >
        <h1 className="text-[38px] font-[800] text-center">
          Conheça nossos parceiros
        </h1>
        <p className="text-center text-[21px] font-[400]">
          Contamos com uma rede de parceiros que compartilham o nosso
          compromisso em entregar sempre o melhor. Juntos, oferecemos pacotes de
          serviços personalizados para garantir que você tenha as soluções mais
          completas e eficientes ao seu alcance.
        </p>
        <div className="w-[95%] my-10 flex items-center" data-aos="zoom-in-up">
          <SwiperParceiros slides={3} />
        </div>
      </section>
    </main>
  );
}

export default ParceirosDesktop;
