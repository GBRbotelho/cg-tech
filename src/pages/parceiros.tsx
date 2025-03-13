import ParceirosDesktop from "@/ui/pages/Parceiros/ParceirosDesktop";
import ParceirosMobile from "@/ui/pages/Parceiros/ParceirosMobile";
import React from "react";

function parceiros() {
  return (
    <>
      <ParceirosDesktop />;
      <ParceirosMobile />
    </>
  );
}

export default parceiros;
