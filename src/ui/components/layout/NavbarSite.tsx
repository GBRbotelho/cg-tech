import React from "react";

function NavbarSite() {
  return (
    <nav className="fixed z-50 w-full flex justify-center items-center navbarBackground text-white">
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
