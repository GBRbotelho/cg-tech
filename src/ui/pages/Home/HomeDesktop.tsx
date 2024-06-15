import React from "react";

function HomeDesktop() {
  return (
    <main className="h-screen w-screen">
      <section className="w-full bcground text-center text-white h-[50vw] bg-cover bg-center flex items-center justify-center">
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
    </main>
  );
}

export default HomeDesktop;
