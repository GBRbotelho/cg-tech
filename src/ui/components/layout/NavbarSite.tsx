import React, { useEffect, useState } from "react";

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
        <div className="w-[210px]">Logo</div>
        <ul className="hidden gap-6 text-[18px] lg:flex">
          <li>Home</li>
          <li>Portal</li>
          <li>Sobre nós</li>
          <li>Trabalhe conosco</li>
        </ul>
        <div className="w-[210px] hidden lg:block">
          <button className="bg-[#003f88] rounded-[5px] py-2 px-5">
            Acesso Funcionários
          </button>
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
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a href="/about">Home</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a href="/portfolio">Portal</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a href="/contact">Sobre nós</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <a href="/contact">Trabalhe conosco</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase text-black">
              <button className="bg-[#003f88] text-white rounded-[5px] py-2 px-5">
                Acesso Funcionários
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSite;
