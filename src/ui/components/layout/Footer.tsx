import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black flex-col gap-10 text-white flex justify-around items-center py-5 px-10 md:flex-row">
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
          <Link href={"https://heyzine.com/flip-book/7761ca8eb5.html"}>
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
            <li className="cursor-pointer transition duration-200 hover:scale-105">
              <i className="ri-instagram-line"></i>
            </li>
          </Link>
          {/* <Link href={}></Link> */}
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
    </footer>
  );
}
