import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";

type Props = {
  slides: number;
};

function SwiperService(props: Props) {
  const swiperRef: any = useRef();
  return (
    <>
      <div className="left-[-10px]">
        <button onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={props.slides}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Segurança Patrimonial"
              text="Proteja seu patrimônio com nossa equipe treinada e equipada, garantindo vigilância constante
e estratégias personalizadas para a sua segurança."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Controle de Acesso"
              text="Controle total de entrada e saída com tecnologia avançada, prevenindo acessos não
autorizados e garantindo um ambiente seguro."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="CFTV (Circuito Fechado de Televisão)"
              text="Monitore seu espaço em tempo real com sistemas de CFTV de alta qualidade, garantindo
vigilância constante e acesso remoto."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Portaria e Vigia"
              text="Profissionais capacitados para recepção e vigilância, garantindo segurança, controle e
tranquilidade para moradores e visitantes."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Limpeza"
              text="Mantenha seu ambiente impecável com nossa equipe de limpeza, garantindo um espaço
sempre higienizado e agradável."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Zeladoria"
              text="Serviços de zeladoria dedicados a cuidar de todas as necessidades do seu condomínio,
garantindo organização e bom funcionamento."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Manutenção"
              text="Cuide de todas as suas necessidades de manutenção com nossa equipe especializada, pronta
para resolver problemas rapidamente."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Jardineiro"
              text="Transforme seus jardins com nossos serviços de jardinagem, mantendo áreas verdes sempre
bonitas e bem cuidadas."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Mensageiro"
              text="Agilidade e eficiência na entrega de correspondências e pacotes com nossos serviços de
mensageiro, garantindo pontualidade e segurança."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Auxiliar Administrativo"
              text="Conte com apoio administrativo eficiente para organizar e gerenciar tarefas cotidianas do seu
condomínio ou empresa."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Gerente Condominial"
              text="Gestão completa e profissional do seu condomínio com nossos gerentes condominiais,
garantindo operações suaves e satisfatórias."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isVisible }) => (
            <Card
              label="Supervisor"
              text="Supervisão dedicada para assegurar que todos os serviços sejam executados com excelência e
eficiência, proporcionando tranquilidade e segurança."
              active={isVisible ? true : false}
            />
          )}
        </SwiperSlide>
      </Swiper>
      <div className="rigth-0">
        <button onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
      </div>
    </>
  );
}

export default SwiperService;
