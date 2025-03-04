import TableUser from "@/ui/components/table/table-user";
import Card from "@/ui/pages/Dashboard/components/Card";
import React from "react";

function UsersMobile() {
  return (
    <main className="flex flex-col  w-screen lg:hidden ml-[75px] pt-[60px]">
      <div className="flex flex-col">
        <h1 className="text-[35px] pt-4 pl-12 text-blue-700 font-[700]">
          Usuários
        </h1>
        <div className="w-[90vw] ml-12 h-1 mb-6 bg-blue-700 mt-2"></div>
      </div>

      <div className="flex mb-12 px-10">
        <TableUser />
      </div>
    </main>
  );
}

export default UsersMobile;
