import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardJornal from "./CardJornal";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  slides: number;
};

function SwiperJornal(props: Props) {
  const swiperRef: any = useRef();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="absolute top-1/2 left-0 z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <i className="ri-arrow-left-circle-fill text-3xl"></i>
      </button>

      <div className="px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={props.slides}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          watchSlidesProgress
        >
          <SwiperSlide>
            <Link
              href={"https://heyzine.com/flip-book/745e2bb4b7.html"}
              target="_blank"
            >
              <CardJornal src="/img/sectionHome/jornal.jpeg" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <CardJornal
              onClick={() => setOpenModal(true)}
              src="/img/sectionHome/bolsa.jpeg"
            />
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Informações sobre o Convênio</DialogTitle>
                  <DialogDescription>
                    <ul className="mt-3 flex flex-col gap-3">
                      <li>
                        O Convênio não gera qualquer desconto no holerite e o
                        convenio se estende aos cônjuge e dependentes.
                      </li>
                      <li>
                        Os colaboradores deverão procurar uma unidade mais
                        próxima ou polo parceiro, juntamente com holerite para
                        comprovar que trabalha na CGTECH.
                      </li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"http://179.191.96.206:8181/GesOperWeb/selfun.portal.aspx"}
              target="_blank"
            >
              <CardJornal src="/img/sectionHome/plano.jpeg" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        className="absolute top-1/2 right-0 z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <i className="ri-arrow-right-circle-fill text-3xl"></i>
      </button>
    </div>
  );
}

export default SwiperJornal;
