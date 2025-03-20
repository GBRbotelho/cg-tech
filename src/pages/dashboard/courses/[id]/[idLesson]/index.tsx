import Navbar from "@/ui/components/layout/Navbar";
import ClientsDesktop from "@/ui/pages/Dashboard/ClientsDesktop";
import ClientsMobile from "@/ui/pages/Dashboard/ClientsMobile";
import React from "react";

function Clients() {
  return (
    <>
      <ClientsDesktop />
      <ClientsMobile />
    </>
  );
}

export default Clients;
