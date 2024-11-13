import React from "react";
import Home from "@/ui/components/icons/MenuNav/Home";
import Clientes from "@/ui/components/icons/MenuNav/Clients";
import ItemMenu from "./components/ItemMenu";
import Engrenagens from "../icons/MenuNav/Engrenagens";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const pathName = useRouter().pathname.split("/");
  const currentSegment = pathName[2];
  console.log(currentSegment);
  console.log(pathName);

  return (
    <nav className="fixed h-full w-[75px] flex flex-col justify-center text-white items-center bg-[#1B4391] z-50">
      <div className="h-[95%] w-full flex flex-col justify-between items-center">
        <div className="relative w-full h-[50px]">
          <Image fill src="/img/logo.webp" alt="Logo" />
        </div>
        <ul className="m-0 p-0 list-none w-full flex flex-col items-center justify-center gap-[20px]">
          <ItemMenu
            active={
              currentSegment === undefined || currentSegment === "article"
            }
          >
            <Link href={"/dashboard"}>
              <Home className="w-[40px]" />
            </Link>
          </ItemMenu>
          {/* <ItemMenu active={currentSegment === "clients"}>
          <Link href={"/dashboard/clients"}>
              <Clientes className="w-[40px]" />
            </Link>
          </ItemMenu> */}
        </ul>
        <button>
          <Engrenagens className="w-[40px] h-[50px] text-white" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
