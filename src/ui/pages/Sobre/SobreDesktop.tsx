import React from "react";
import Image from "next/image";
import missao from "@/public/imgs/Home/sobre.webp";
import visao from "@/public/imgs/Sobre/carro.webp";
import valores from "@/public/imgs/Sobre/backgroundsobre.webp";
import homem from "@/public/imgs/Sobre/homem.webp";

function SobreDesktop() {
  return (
    <main className="bg-[#f0f7ff] hidden flex-col items-center w-screen lg:flex">
      <section className="w-screen bgSobre text-center text-white h-[45vw] min-h-[550px] max-h-[700px] bg-cover bg-center items-center justify-center flex">
        <div className="absolute w-screen h-[45vw] min-h-[550px] max-h-[700px] bg-black bg-opacity-60 top-0 left-0 z-10"></div>
        <div className="flex items-center flex-col gap-10 z-20">
          <h1 className="font-[800] leading-[55px] m-0 p-0 text-[40px]">
            Sobre a CGTECH
          </h1>
          <p className="text-[20px] max-w-[600px] m-0 p-0">
            Há mais de 20 anos sendo referência no mercado de prestação de
            serviços para condomínios residenciais e empresariais, com mais de
            300 condomínios atendidos por suas 5 sedes localizadas nas cidades
            de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
          </p>
        </div>
      </section>
      <section className="flex w-[80%] my-5 max-w-[1400px] justify-around">
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">15+</h1>
          <p className="text-center text-[22px] font-[300]  leading-6">
            Viaturas <br /> Pŕoprias
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">5+</h1>
          <p className="text-center text-[22px] font-[300]  leading-6">
            Sedes <br /> no Brasil
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">1 mil+</h1>
          <p className="text-center text-[22px] font-[300] leading-6">
            Vidas <br /> Protegidas
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">120+</h1>
          <p className="text-center text-[22px] font-[300] leading-6">
            Funcionários{" "}
          </p>
        </div>
      </section>
      <section className="flex w-[80%] flex-col  my-5 max-w-[1400px] justify-around">
        <div className="bg-white h-[200px] flex items-start justify-between">
          <div className="flex flex-col text-[#003f88] px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
          <div className="w-[300px] min-w-[300px] bg-[#003f88] h-full">
            <Image
              src={missao}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
        <div className="bg-[#003f88] h-[200px] flex items-start justify-between">
          <div className="w-[300px] min-w-[300px] bg-[#ffffff] h-full">
            <Image
              src={visao}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
          <div className="flex flex-col items-end text-[#ffffff] px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px] text-end">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
        </div>
        <div className="bg-white h-[200px] flex items-start justify-between">
          <div className="flex flex-col text-[#003f88] px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
          <div className="w-[300px] min-w-[300px] bg-[#003f88] h-full">
            <Image
              src={valores}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
      </section>
      <section className="flex w-[80%] flex-col  my-10 max-w-[1400px] items-center justify-center">
        <div className="flex flex-grow items-center border-collapse border-[#003f88] border-[2px]">
          <Image
            src={homem}
            alt="Video"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
          />
          <div className="px-[60px] flex flex-col justify-evenly gap-4">
            <h1 className="font-[900] text-[25px] text-[#003f88]">
              Mensagem do nosso CEO
            </h1>
            <p className="w-[350px] text-[14px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
            <div>
              <h2 className="text-[#003f88] font-[800] text-[14px]">
                Nome completo
              </h2>
              <span className="text-[#003f88] text-[12px]">CEO e Fundador</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full items-center justify-between">
        <div className="w-full py-5 flex flex-col justify-center items-center gap-2 bg-[#003f88]">
          <h1 className="text-[23px] text-white font-[900] text-center">
            Quer ser um cliente <br /> CGTECH?
          </h1>
          <button className="px-6 py-1 bg-white text-[#003f88]">
            Solicitar Orçamento
          </button>
        </div>
        <div className="w-full py-5 flex flex-col justify-center items-center gap-2 bg-white">
          <h1 className="text-[23px] text-[#003f88] font-[900] text-center">
            Quer ser um colaborador <br /> CGTECH?
          </h1>
          <button className="px-6 py-1 text-white bg-[#003f88]">
            Trabalhe Conosco
          </button>
        </div>
      </section>
    </main>
  );
}

export default SobreDesktop;
