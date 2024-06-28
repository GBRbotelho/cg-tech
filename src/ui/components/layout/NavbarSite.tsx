import React, { useEffect, useState } from "react";

function NavbarSite() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
        <ul className="flex gap-6 text-[18px]">
          <li>Home</li>
          <li>Portal</li>
          <li>Sobre nós</li>
          <li>Trabalhe conosco</li>
        </ul>
        <div className="w-[210px]">
          <button className="bg-[#003f88] rounded-[5px] py-2 px-5">
            Acesso Funcionários
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSite;
