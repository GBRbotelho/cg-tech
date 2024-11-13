import React, { useEffect, useState } from "react";
import logo from "@/public/imgs/logo.webp";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/ui/components/modals/loginModal";
import DialogLogin from "@/components/dialogs/dialog-login";

function NavbarSite() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linkJornal = "https://heyzine.com/flip-book/7761ca8eb5.html";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Link onClick={() => setIsNavOpen(false)} href="/">
            <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
              Home
            </li>
          </Link>
          <Link onClick={() => setIsNavOpen(false)} href="/sobre">
            <li className="cursor-pointer transition duration-200 hover:scale-105 hover:text-[#5271ff]">
              Sobre
            </li>
          </Link>
          <Link
            onClick={() => setIsNavOpen(false)}
            href={linkJornal}
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
        <div className="hidden gap-5 lg:flex  items-center w-[390px]">
          <button
            className="bg-[#003f88] rounded-[5px] py-2 px-5"
            onClick={() => setModalLogin(true)}
          >
            Acesso Funcionários
          </button>

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
            <Link
              onClick={() => setIsNavOpen(false)}
              href="/"
              className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsNavOpen(false)}
              href="/sobre"
              className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105"
            >
              Sobre nós
            </Link>
            <li className="border-b border-gray-400 my-8 uppercase text-black cursor-pointer transition duration-200 hover:scale-105">
              <Link target="ablank" href={linkJornal}>
                Jornal
              </Link>
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
              <button
                className="bg-[#003f88] text-white rounded-[5px] py-2 px-5"
                onClick={() => {
                  setIsNavOpen(false);
                  setModalLogin(true);
                }}
              >
                Acesso Funcionários
              </button>
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
      {modalLogin && <LoginModal set={setModalLogin} />}
    </nav>
  );
}

export default NavbarSite;
