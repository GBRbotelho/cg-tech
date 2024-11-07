import React from "react";
import Image from "next/image";
import missao from "@/public/imgs/Home/Section1.webp";
import visao from "@/public/imgs/Sobre/carro.webp";
import valores from "@/public/imgs/Sobre/backgroundsobre.webp";
import homem from "@/public/imgs/Sobre/homem.webp";

function SobreMobile() {
  return (
    <main className="bg-[#f0f7ff] flex flex-col items-center w-screen lg:hidden">
      <section className="relative top-[-20px] w-screen bgSobre text-center text-white m-0 bg-cover py-[100px] bg-center items-center justify-center flex">
        <div className="absolute w-full h-full max-h-full bg-black bg-opacity-60 top-[0px] left-0 py-[100px] z-10"></div>
        <div className="flex items-center flex-col gap-10 z-20">
          <h1 className="font-[800] leading-[55px] m-0 p-0 text-[35px]">
            Sobre a CGTECH
          </h1>
          <p className="text-[15px] max-w-[600px] m-0 px-10">
            Há 25 anos sendo referência no mercado de prestação de serviços para
            condomínios residenciais e empresariais, com mais de 400 condomínios
            atendidos por suas 5 sedes localizadas nas cidades de São José dos
            Campos, Campinas, Jundiaí, São Paulo, Grande ABC, Indaiatuba,
            Sorocaba, Alphaville e Faria Lima.
          </p>
        </div>
      </section>
      <section className="flex w-[95%] my-5 justify-around flex-wrap">
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[30px] p-0">100+</h1>
          <p className="text-center text-[15px] font-[300]  leading-6">
            Viaturas <br /> Pŕoprias
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[30px] p-0">7+</h1>
          <p className="text-center text-[15px] font-[300]  leading-6">
            Sedes <br /> no Brasil
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[30px] p-0">800+</h1>
          <p className="text-center text-[15px] font-[300] leading-6">
            Clientes
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[30px] p-0">4 mil+</h1>
          <p className="text-center text-[15px] font-[300] leading-6">
            Funcionários{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col w-[80%] my-5 max-w-[1400px] gap-5 text-[#003f88] justify-around">
        <h1 className="font-[800] text-center text-[40px]">
          Um pouco da nossa historia
        </h1>
        <p className="text-[18px]">
          A CGTECH tem sido um pilar de segurança e confiança no mercado de
          segurança patrimonial e Facilities. Com um compromisso inabalável com
          a excelência e integridade, operamos continuamente com o mesmo CNPJ,
          todas as certidões negativas de débitos em dia, e uma trajetória de
          sucesso comprovada com foco apenas em Associações, condomínios
          residenciais, comerciais e industriais." "A nossa dedicação à melhoria
          contínua é impulsionada pela integração da tecnologia em todos os
          nossos processos. Realizamos auditorias rigorosas para garantir que
          nossos serviços não apenas atendam, mas superem as expectativas dos
          nossos clientes." "Estamos comprometidos com a sustentabilidade e
          responsabilidade social. Implementando os três pilares do ASG –
          Ambiental, Social e Governança – buscamos constantemente parcerias que
          agreguem valor e contribuam para um futuro melhor." "Na CGTECH,
          valorizamos as pessoas. Nossos clientes são a nossa prioridade, e
          trabalhamos incansavelmente para construir relacionamentos de
          confiança e parceria." 25 anos de inovação, confiança e segurança.
          Juntos, protegemos o seu futuro. CGTECH SECURITY – Segurança para o
          Patrimônio Tranquilidade para você.
        </p>
      </section>
      <section className="flex w-[90%] flex-col gap-10 my-5 max-w-[1400px] items-center">
        <div className="bg-white flex flex-col-reverse w-full max-w-[95%] items-center justify-between">
          <div className="flex flex-col text-[#003f88] items-center px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
          <div className="w-full bg-[#003f88] h-full sm:w-full">
            <Image
              src={missao}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
        <div className="bg-[#003f88] flex flex-col w-full max-w-[95%] items-center justify-between">
          <div className="w-full bg-[#ffffff] h-full sm:w-full">
            <Image
              src={visao}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
          <div className="flex flex-col items-center text-[#ffffff] px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col-reverse w-full max-w-[95%] items-center justify-between">
          <div className="flex flex-col text-[#003f88] items-center px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Há mais de 20 anos sendo referência no mercado de prestação de
              serviços para condomínios residenciais e empresariais, com mais de
              300 condomínios atendidos por suas 5 sedes localizadas nas cidades
              de São José dos Campos, Campinas, São Paulo, Indaiatuba e Jundiaí.
            </p>
          </div>
          <div className="w-full bg-[#003f88] h-full sm:w-full">
            <Image
              src={valores}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
      </section>
      <section className="flex w-[95%] flex-col  my-10 max-w-[1400px] items-center justify-center">
        <div className="flex w-full max-w-[500px] flex-grow flex-col overflow-x-hidden items-center border-collapse border-[#003f88] border-[2px]">
          {/* <Image
            src={homem}
            alt="Video"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
          /> */}
          <div className="px-5 flex flex-col justify-evenly items-center gap-4">
            <h1 className="font-[900] w-full text-[25px] text-[#003f88]">
              Mensagem do nosso CEO
            </h1>
            <p className="w-full text-[14px]">
              Há 25 anos, a CGTECH construiu uma trajetória marcada pela
              excelência no mercado de segurança patrimonial e de facílities,
              sendo reconhecida por sua atuação em mais de 400 condomínios, em
              localidades estratégicas como São José dos Campos, Campinas,
              Jundiaí, São Paulo, e outras. Nosso compromisso é oferecer
              soluções de segurança sob medida, ancoradas na mais alta
              tecnologia e em processos rigorosos Contamos com uma equipe de
              profissionais treinados, treinados para lidar com as mais
              complexas demandas de segurança, seja por meio de vigilância
              armada, desarmada ou monitoramento remoto. Nosso diferencial
              reside na capacidade de antecipar riscos e vulnerabilidades,
              proporcionando um serviço que vai além da proteção: entregamos
              segurança para o patrimônio, tranquilidade para você.
            </p>
            <div>
              <h2 className="text-[#003f88] font-[800] text-[14px]">
                ANTONIO CHAUL NETTO
              </h2>
              <span className="text-[#003f88] text-[12px]">CEO e Fundador</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-between md:flex-row">
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

export default SobreMobile;
