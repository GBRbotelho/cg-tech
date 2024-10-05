import React, { useEffect, useState } from "react";
import logo from "@/public/imgs/logo.webp";
import Image from "next/image";
import Link from "next/link";

function NavbarSite() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 550) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
    const scrollThreshold = 60;

    if (position < scrollThreshold) {
      setVisible(true);
    } else {
      const visible = prevScrollPos > position;
      setVisible(visible);
    }

    setPrevScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`fixed z-50 w-full flex justify-center items-center transition duration-300 text-white ${
        navbarBackground ? "bg-black" : "navbarBackground"
      } ${visible ? "" : "transform -translate-y-full"}`}
    >
      <div className="flex w-[95%] py-6 justify-between items-center">
        <div className="lg:w-[390px]">
          <Image src={logo} alt="Logo" height={50} />
        </div>
        <ul className="hidden gap-6 text-[18px] lg:flex">
          <Link href="/">
            <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
              Home
            </li>
          </Link>
          {/* {/* <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
            Portal
          </li> */}
          <Link
            href="https://heyzine.com/flip-book/f722670732.html"
            target="blank"
          >
            <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
              Jornal
            </li>
          </Link>
          <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
            <a
              target="ablank"
              href="http://srvcgt01.brazilsouth.cloudapp.azure.com/GesOperWeb/selfun.acessar.aspx"
            >
              Trabalhe conosco
            </a>
          </li>
        </ul>
        <div className="hidden gap-5 lg:flex w-[390px]">
          <a target="ablank" href="https://app.pipefy.com/public/form/6C3h3rJb">
            <button className="bg-[#003f88] rounded-[5px] py-2 px-5">
              Acesso Funcionários
            </button>
          </a>
          <a
            target="ablank"
            href="https://app.pipefy.com/public/form/nVewOHRz "
          >
            <button className="bg-[#003f88] rounded-[5px] py-2 px-5">
              Acesso Gestão
            </button>
          </a>
        </div>
        <div className="uppercase text-white cursor-pointer transition duration-200 lg:hidden hover:scale-105">
          <a
            target="ablank"
            href="http://srvcgt01.brazilsouth.cloudapp.azure.com/GesOperWeb/selfun.acessar.aspx"
          >
            Trabalhe conosco
          </a>
        </div>

        <div
          className="HAMBURGER-ICON space-y-2 block lg:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <a target="ablank" href="">
                Home
              </a>
            </li>
            {/* <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <a target="ablank" href="">Portal</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <a target="ablank" href="">Sobre nós</a>
            </li> */}
            <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <a
                target="ablank"
                href="https://heyzine.com/flip-book/f722670732.html"
              >
                Jornal
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <a
                target="ablank"
                href="http://srvcgt01.brazilsouth.cloudapp.azure.com/GesOperWeb/selfun.acessar.aspx"
              >
                Trabalhe conosco
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a
                target="ablank"
                href="https://app.pipefy.com/public/form/6C3h3rJb"
              >
                <button className="bg-[#003f88] text-white rounded-[5px] py-2 px-5">
                  Acesso Funcionários
                </button>
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a
                target="ablank"
                href="https://app.pipefy.com/public/form/nVewOHRz "
              >
                <button className="bg-[#003f88] text-white rounded-[5px] py-2 px-5">
                  Acesso Gestão
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSite;
