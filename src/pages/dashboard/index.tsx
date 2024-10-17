import Navbar from "@/ui/components/layout/Navbar";
import IndexDesktop from "@/ui/pages/Dashboard/IndexDesktop";
import IndexMobile from "@/ui/pages/Dashboard/IndexMobile";
import React from "react";

function index() {
  return (
    <>
      <IndexDesktop />
      <IndexMobile />
    </>
  );
}

export default index;
