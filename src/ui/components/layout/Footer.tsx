import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemFooter from "./components/ItemFooter";

export default function Footer() {
  return (
    <footer>
      <div className=" hidden lg:flex justify-around items-center py-5 px-10">
        <ItemFooter
          city="UNIDADE DE CAMPINAS"
          street="Rua Monte Prazivel, 100"
          district="Chácara da Barra"
        />
        <ItemFooter
          city="UNIDADE DE INDAIATUBA"
          street="Av. Kennedy, 1177, sala 1"
          district="Cidade Nova I"
        />
        <ItemFooter
          city="UNIDADE DE SÃO PAULO"
          street="Av. Brigadeiro Faria Lima, 1811"
          district="Sobre lojas nº 11 e 12"
        />
        <ItemFooter
          city="UNIDADE DE S J CAMPOS"
          street="Rua Maestro Egídio Pinto, 72"
          district="Jd São Dimas"
        />
        <ItemFooter
          city="UNIDADE DE JUNDIAÍ"
          street="Rua Capitão Cassiano R. Toledo, 191"
          district="Edifício Golden Office"
        />
        <ItemFooter
          city="UNIDADE DE ALPHAVILLE"
          street="Av. Andrômeda, nº 885, sala 1006"
          district="Barueri"
        />
        <ItemFooter
          city="UNIDADE DE SÃO BERNARDO DO CAMPO"
          street="Rua José Vertolato, nº 111, sala 1112"
          district="Torre B, Centro"
        />
      </div>
      <div className="hidden lg:flex justify-center pb-5">
        <h1 className="text-[25px] 2xl:text-[49px] font-bold">
          Central de atendimento: 0800 00 0005 | www.cgtech.com.br
        </h1>
      </div>
<<<<<<< HEAD
      <div className="w-full bg-black flex-col gap-10 text-white flex justify-around items-center py-5 px-10 md:flex-row">
        <div className="h-[130px] w-[180px] relative">
          <Image src="/img/logo.webp" fill alt="Logo" />
        </div>
        <div className="max-w-[210px]">
          <span className="font-[800] text-[14px]">
            “Sempre com o compromisso de cuidar de você e da sua família”
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-[700] text-[13px]">Links importantes:</h3>
          <ul className="flex flex-col text-[13px]">
            <Link
              href={
                "https://drive.google.com/file/d/1i9YXX27LL0TEWkSne6_G0qpUhs6sW3rQ/view?usp=sharing"
              }
            >
              <li className="cursor-pointer">Jornal</li>
            </Link>
            <Link href={"/sobre"}>
              <li className="cursor-pointer">Sober nós</li>
            </Link>
            <Link href={"https://app.pipefy.com/public/form/nVewOHRz"}>
              <li className="cursor-pointer">Acesso a gestão</li>
            </Link>
            <Link href={"https://app.pipefy.com/public/form/6C3h3rJb"}>
              <li className="cursor-pointer">Acesso a funcionário</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-[700] text-[11px]">
            Acesse nossas redes sociais:
          </h3>
          <ul className="text-white text-[35px] flex">
            <Link href={"https://www.instagram.com/grupocgtech/"}>
              <li className="cursor-pointer transition duration-200 hover:scale-105">
                <i className="ri-instagram-line"></i>
              </li>
            </Link>
            {/* <Link href={}></Link> */}
=======
      <div className="flex flex-col">
        <h3 className="font-[700] text-[13px]">Links importantes:</h3>
        <ul className="flex flex-col text-[13px]">
          <Link
            href={
              "https://drive.google.com/file/d/1UmrFRxFSl_Ehx41Y4fcKBfC_LGXtRl2D/view"
            }
          >
            <li className="cursor-pointer">Jornal</li>
          </Link>
          <Link href={"/sobre"}>
            <li className="cursor-pointer">Sober nós</li>
          </Link>
          <Link href={"https://app.pipefy.com/public/form/nVewOHRz"}>
            <li className="cursor-pointer">Acesso a gestão</li>
          </Link>
          <Link href={"https://app.pipefy.com/public/form/6C3h3rJb"}>
            <li className="cursor-pointer">Acesso a funcionário</li>
          </Link>
        </ul>
      </div>
      <div>
        <h3 className="font-[700] text-[11px]">Acesse nossas redes sociais:</h3>
        <ul className="text-white text-[35px] flex">
          <Link href={"https://www.instagram.com/grupocgtech/"}>
>>>>>>> 525a5ef52deaea8f32b1fceb82718adf21de1d78
            <li className="cursor-pointer transition duration-200 hover:scale-105">
              <i className="ri-whatsapp-line"></i>
            </li>
            <Link
              href={
                "https://www.linkedin.com/company/grupo-cgtech-security/?viewAsMember=true"
              }
            >
              <li className="cursor-pointer transition duration-200 hover:scale-105">
                <i className="ri-linkedin-box-line"></i>
              </li>
            </Link>
            <Link href={"https://www.youtube.com/@grupocgtechsecurity8898"}>
              <li className="cursor-pointer transition duration-200 hover:scale-105">
                <i className="ri-youtube-line"></i>
              </li>
            </Link>
            <Link href={"https://www.tiktok.com/@grupocgtech"}>
              <li className="cursor-pointer transition duration-200 hover:scale-105">
                <i className="ri-tiktok-line"></i>
              </li>
            </Link>
            <Link href={"https://x.com/grupocgtech"}>
              <li className="cursor-pointer transition duration-200 hover:scale-105">
                <i className="ri-twitter-x-fill"></i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
