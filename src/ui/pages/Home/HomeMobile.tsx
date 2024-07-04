import React, { useEffect, useState } from "react";
import SwiperService from "./components/SwiperService";
import Testimonial from "./components/Testimonial";
import Button from "@/ui/components/utils/Button";
import CardPortal from "./components/CardPortal";
import SwiperUnitys from "./components/SwiperUnitys";
import Image from "next/image";
import video from "@/public/imgs/Home/video.webp";
import sobre from "@/public/imgs/Home/sobre.webp";

import portal1 from "@/public/imgs/Home/portal1.webp";
import portal2 from "@/public/imgs/Home/portal2.webp";
import portal3 from "@/public/imgs/Home/portal3.webp";
import portal4 from "@/public/imgs/Home/portal4.webp";

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
        <div className="absolute w-full h-[48vw] min-h-[500px] max-h-[700px] navbarBackground top-0 left-0 z-10"></div>
        <div className="flex items-center flex-col gap-10 z-20">
          <div className="w-[95%]">
            <h1 className="font-[700] leading-[55px] m-0 p-0 text-[32px]">
              O MELHOR PARA O SEU CONDOMÍNIO
            </h1>
            <p className="text-[20px] m-0 p-0">
              Soluções completas e eficientes{" "}
            </p>
          </div>
          <button className="text-[20px] bg-[#5271ff] w-fit px-5 py-1 rounded-[5px]">
            Solicitar orçamento
          </button>
        </div>
      </section>
      <section className="max-w-[1400px] justify-center w-[90%] flex flex-col items-center gap-2 my-0">
        <div
          className="w-full max-w-[600px] h-full min-h-[600px] flex flex-col gap-2 justify-center"
          data-aos="zoom-in-up"
        >
          <div>
            <h1 className="text-[34px] font-[800]">Sobre a CGTECH</h1>
            <p className="text-[18px]">Uma família que cuida da sua família!</p>
          </div>
          <p className="text-[18px]">
            Só quem tem mais de 20 anos de experiência no segmento e as melhores
            tecnologias pode garantir a sua segurança e de sua família.
          </p>
          <div className=" max-w-[600px]">
            <Image src={sobre} alt="Video" />
          </div>
        </div>
        <div
          className="w-full max-w-[600px] h-full flex flex-col justify-start gap-12"
          data-aos="zoom-in-up"
        >
          <div className=" max-w-[600px]">
            <Image src={video} alt="Video" />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[18px]">
              Nosso compromisso é cuidar e proteger. Contamos com profissionais
              treinados e equipados, armados ou desarmados, além de
              monitoramento de imagens, controle de acesso e vigilância
              ostensiva para prevenir crimes.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] w-[95%] flex flex-col items-center justify-center my-10">
        <h1
          className="text-[30px] font-[800] text-center"
          data-aos="zoom-in-up"
        >
          Entregando sempre o melhor para os nossos clientes
        </h1>
        <p className="text-center text-[18px] font-[400]" data-aos="zoom-in-up">
          Criamos pacotes de serviços personalizados para que você tenha a
          melhor solução ao seu alcance
        </p>
        <div
          className={`w-[95%] ${
            windowWidth <= 700 && "max-w-[400px]"
          } my-0 flex items-center`}
          data-aos="zoom-in-up"
        >
          <SwiperService slides={(windowWidth > 700 && 2) || 1} />
        </div>
      </section>

      <section
        className="w-[95vw] rounded-[6px] items-center gap-5 py-10 my-10 max-w-[1400px] flex flex-col gradientBackground2 justify-center"
        data-aos="zoom-in-up"
      >
        <div className="ml-16">
          <h1 className="text-white font-[700] text-[30px]">Nossos clientes</h1>
          <p className="text-white text-[18px] w-[90%]">
            Nossos clientes sempre recebem o melhor atendimento possível, somos
            referencia em qualidade e excelência{" "}
          </p>
        </div>
        <div className="flex items-center flex-col gap-5 w-[93%]">
          <Testimonial
            label="Elisabeth Trevizan Pastore"
            text="Só tenho que elogiar as pessoas que trabalham no nosso condominio , pessoas educadas e
que trabalham para a melhoria do nosdo ambiente. Parabéns a vcs"
            classNameCard="relative"
          />
          <Testimonial
            label="Gilson Roberto de Paula"
            text="A maior no segmento, também no Vale do Paraíba, sem comparação, benefícios e
compromissos em dia, respeito aos funcionários."
            classNameCard="relative"
          />
          <Testimonial
            label="Cintia"
            text="CGTECH é a maior e mais sólida do mercado, única com certidões negativadas que garante a
segurança do condomínio e do funcionário"
            opacity={"30"}
            classNameCard="relative"
          />
        </div>
        <div className="">
          <Button name="Quero ser cliente" className="px-6" />
        </div>
      </section>
      <section className="w-[95%] rounded-[6px] my-10 max-w-[1400px] flex flex-col justify-center items-center">
        <h1 className="font-[700] text-[30px]">Ultimas Novidades do Portal</h1>
        <p className="text-[18px]">
          Se mantenha sempre atualizado sobre o mundo da segurança e facilities
        </p>
        <div className="flex w-[95%] mt-14 flex-col justify-center items-center">
          <div className="w-full max-w-[500px]">
            <CardPortal title="Dicas de Segurança para Condomínios" text="">
              <Image src={portal1} alt="Portal 1" />
            </CardPortal>
            <CardPortal title="Tecnologia de Segurança" text="" reverse={true}>
              <Image src={portal2} alt="Portal 2" />
            </CardPortal>
          </div>
          <div className="w-full max-w-[500px]">
            <CardPortal title="Tendências em Segurança Patrimonial" text="">
              <Image src={portal3} alt="Portal 3" />
            </CardPortal>
            <CardPortal title="Prevenção de Riscos" text="" reverse={true}>
              <Image src={portal4} alt="Portal 4" />
            </CardPortal>
          </div>
        </div>
      </section>
      {/* <section
        className={`relative  w-[95%] flex flex-col items-center justify-center my-10`}
      >
        <h1 className="font-[700] w-[90%] text-[36px]">Nossas unidades</h1>
        <div
          className={`relative w-[90%] ${
            windowWidth < 500 && "max-w-[250px]"
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
      </section> */}
    </main>
  );
}

export default HomeMobile;
