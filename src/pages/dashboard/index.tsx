import { Course } from "@/core/domain/entities/course";
import { ContentGateway } from "@/core/infra/gateways/ContentGateway";
import Navbar from "@/ui/components/layout/Navbar";
import IndexDesktop from "@/ui/pages/Dashboard/IndexDesktop";
import IndexMobile from "@/ui/pages/Dashboard/IndexMobile";
import { NextPage } from "next";
import React from "react";

export async function getServerSideProps() {
  const courses = await ContentGateway.getCourses();
  return {
    props: {
      courses,
    },
  };
}

const index: NextPage<{
  destinations: Course[];
}> = (props) => {
  console.log(props);
  return (
    <>
      <IndexDesktop />
      <IndexMobile />
    </>
  );
};

export default index;
