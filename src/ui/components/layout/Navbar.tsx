import React from "react";

function Navbar() {
  return (
    <nav className="h-full w-[75px] flex flex-col justify-center items-center">
      <div className="h-[95%] w-full flex flex-col justify-between items-center">
        <div>TEstea</div>
        <ul className="m-0 p-0 list-none w-full flex flex-col items-center justify-center gap-[20px]">
          <li className="w-[70%] transition-[0.2s]">Home</li>
          <li className="w-[70%] transition-[0.2s]">Clientes</li>
          <li className="w-[70%] transition-[0.2s]">Estoque</li>
          <li className="w-[70%] transition-[0.2s]">Serviços</li>
          <li className="w-[70%] transition-[0.2s]">Tratamentos</li>
        </ul>
        <button>Configuração</button>
      </div>
    </nav>
  );
}

export default Navbar;
