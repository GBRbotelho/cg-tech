import React from "react";
import Sino from "../icons/Header/Sino";
import Profile from "../icons/Header/Profile";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

function Header() {
  const { logout, user } = useAuth();

  return (
    <header className="fixed bg-[#D0D9E8] w-full h-[65px] lg:h-[47px] flex items-center justify-center z-10">
      <div className="w-[95%] h-full flex justify-between items-center">
        <h2 className="m-0 text-[25px] text-[#1B4391] pl-20 ">
          {/* <strong className="font-[700] text-[20px]"> Colaborador:</strong> */}
        </h2>
        <div className="h-full flex items-center gap-[20px]">
          <p className="text-[#1B4391] text-[18px] font-[400]">
            Olá, {user && user.name}
          </p>
          {/* <span className="text-[#1B4391]">
            <Sino className="w-[25px] h-[25px]" />
          </span>
          <button>
            <Profile className="w-[30px] h-[30px]" />
          </button> */}
          <Button
            className="bg-blue-600 hover:bg-opacity-90 hover:bg-blue-600/90"
            type="button"
            onClick={() => logout()}
          >
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
