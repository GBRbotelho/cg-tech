import React from "react";
import SwiperService from "./components/SwiperService";
import Testimonial from "./components/Testimonial";
import Button from "@/ui/components/utils/Button";
import CardPortal from "./components/CardPortal";
import SwiperUnitys from "./components/SwiperUnitys";
import video from "@/public/imgs/Home/video.webp";
import sobre from "@/public/imgs/Home/sobre.webp";
import portal1 from "@/public/imgs/Home/portal1.webp";
import portal2 from "@/public/imgs/Home/portal2.webp";
import portal3 from "@/public/imgs/Home/portal3.webp";
import portal4 from "@/public/imgs/Home/portal4.webp";
import Image from "next/image";

function HomeDesktop() {
  return (
    <main className="bg-[#f5f5f5] hidden flex-col items-center w-screen lg:flex">
      <section className="w-screen bcground text-center text-white h-[48vw] min-h-[800px] max-h-[700px] bg-cover bg-center items-center justify-center flex">
        <div className="absolute w-screen h-[48vw] min-h-[800px] max-h-[700px] navbarBackground top-0 left-0 z-10"></div>
        
        <div className="flex items-center flex-col gap-10 z-20">
          <div>
            <h1 className="font-[700] leading-[55px] m-0 p-0 text-[55px]">
              O MELHOR PARA O SEU <br /> CONDOMÍNIO
            </h1>
            <p className="text-[32px] m-0 p-0">
              Soluções completas e eficientes{" "}
            </p>
          </div>
          <a
            href="https://wa.me/5519974017905?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="ablank"
          >
            <button className="text-[25px] bg-[#5271ff] w-fit px-5 py-1 rounded-[5px]">
              Solicitar orçamento
            </button>
          </a>
        </div>
      </section>




      <section className="max-w-[1400px] justify-center min-h-[700px] w-[90%] flex items-center gap-[5%] my-10">
        <div
          className="w-[40%] h-full min-h-[600px] flex flex-col justify-between"
          data-aos="zoom-in-up"
        >
          <div>
            <h1 className="text-[38px] font-[800]">Sobre a CGTECH</h1>
            <p className="text-[21px]">Uma família que cuida da sua família!</p>
          </div>
          <p className="text-[21px]">
            Só quem tem mais de 20 anos de experiência no segmento e as melhores
            tecnologias pode garantir a sua segurança e de sua família.
          </p>
          <div className="">
            <Image
              src={sobre}
              alt="Video"
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
            />
          </div>
        </div>
        <div
          className="w-[40%] h-full flex flex-col justify-start gap-12"
          data-aos="zoom-in-up"
        >
          <div className="">
            <Image
              src={video}
              alt="Video"
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[21px]">
              Nosso compromisso é cuidar e proteger. Contamos com profissionais
              treinados e equipados, armados ou desarmados, além de
              monitoramento de imagens, controle de acesso e vigilância
              ostensiva para prevenir crimes.
            </p>
          </div>
        </div>
      </section>
      <section
        className="max-w-[1400px] w-full flex flex-col items-center justify-center my-10"
        data-aos="zoom-in-up"
      >
        <h1 className="text-[38px] font-[800] text-center">
          Entregando sempre o melhor para os nossos clientes
        </h1>
        <p className="text-center text-[21px] font-[400]">
          Criamos pacotes de serviços personalizados para que você tenha a
          melhor
          <br />
          solução ao seu alcance
        </p>
        <div className="w-[95%] my-0 flex items-center" data-aos="zoom-in-up">
          <SwiperService slides={3} />
        </div>
      </section>

      <section
        className="w-[95vw] rounded-[6px] py-10 my-10 max-w-[1400px] flex flex-col gradientBackground2 justify-center"
        data-aos="zoom-in-up"
      >
        <div className="ml-16">
          <h1 className="text-white font-[700] text-[33px]">Nossos clientes</h1>
          <p className="text-white text-[26px] w-[680px]">
            Nossos clientes sempre recebem o melhor atendimento possível, somos
            referência em qualidade e excelência
          </p>
        </div>
        <div className="flex items-center justify-end w-[93%]">
          <Testimonial
            label="Elisabeth Trevizan Pastore"
            text="Só tenho que elogiar as pessoas que trabalham no nosso condominio , pessoas educadas e
que trabalham para a melhoria do nosdo ambiente. Parabéns a vcs"
            classNameCard="relative left-10 bottom-3 z-10"
          />
          <div className="flex flex-col gap-6">
            <Testimonial
              label="Gilson Roberto de Paula"
              text="A maior no segmento, também no Vale do Paraíba, sem comparação, benefícios e
compromissos em dia, respeito aos funcionários."
              classNameCard="relative left-2"
            />
            <Testimonial
              label="Cintia"
              text="CGTECH é a maior e mais sólida do mercado, única com certidões negativadas que garante a
segurança do condomínio e do funcionário"
              opacity={"30"}
              classNameCard="relative left-[-15px]"
            />
          </div>
        </div>
        <div className="ml-16">
          <a
            href="https://wa.me/5519974017905?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="ablank"
          >
            <Button name="Quero ser cliente" className="px-6" />
          </a>
        </div>
      </section>
      <section
        className="w-full rounded-[6px] my-10 max-w-[1400px] flex flex-col justify-center items-center"
        data-aos="zoom-in-up"
      >
        <h1 className="font-[700] text-[36px]">Ultimas Novidades do Portal</h1>
        <p className="text-[24px] text-center">
          Se mantenha sempre atualizado sobre o mundo da <br /> segurança e
          facilities
        </p>
        <div className="flex w-[95%] mt-14 flex-row justify-center items-center">
          <div className="w-[50%]" data-aos="zoom-in-up">
            <CardPortal
              title="Dicas de Segurança para Condomínios"
              text="Conselhos práticos para melhorar a segurança no seu condomínio, abrangendo desde medidas
preventivas até ações de emergência."
            >
              <Image src={portal1} alt="Portal 1" />
            </CardPortal>
            <CardPortal
              title="Tecnologia de Segurança"
              text="Descubra como as novas tecnologias estão transformando a segurança patrimonial, desde
sistemas de vigilância avançados até inteligência artificial."
              reverse={true}
            >
              <Image src={portal2} alt="Portal 2" />
            </CardPortal>
          </div>
          <div className="w-[50%]" data-aos="zoom-in-up">
            <CardPortal
              title="Tendências em Segurança Patrimonial"
              text="Fique por dentro das últimas novidades e inovações em segurança patrimonial, com análises
de especialistas e previsões de mercado."
            >
              <Image src={portal3} alt="Portal 3" />
            </CardPortal>
            <CardPortal
              title="Prevenção de Riscos"
              text="Artigos sobre como identificar e mitigar riscos potenciais em seu condomínio ou empresa,
mantendo todos protegidos."
              reverse={true}
            >
              <Image src={portal4} alt="Portal 4" />
            </CardPortal>
          </div>
        </div>
      </section>
      {/* <section className="relative max-w-[1400px] w-full flex flex-col items-center justify-center my-10">
        <h1 className="font-[700] w-[90%] text-[36px]">Nossas unidades</h1>
        <div className="relative w-[90%] my-0 flex items-center">
          <SwiperUnitys slides={4} />
        </div>
      </section> */}
    </main>
  );
}

export default HomeDesktop;
