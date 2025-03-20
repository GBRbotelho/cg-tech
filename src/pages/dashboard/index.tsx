import { Course } from "@/core/domain/entities/course";
import { NotionGateway } from "@/core/infra/gateways/notion-gateway";
import IndexDesktop from "@/ui/pages/Dashboard/IndexDesktop";
import IndexMobile from "@/ui/pages/Dashboard/IndexMobile";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const index: NextPage<{
  destinations: Course[];
}> = () => {
  const [courses, setCourses] = useState<[] | Course[]>([]);
  const getCourses = async () => {
    const response = await NotionGateway.getCourses();
    setCourses(response.data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <IndexDesktop courses={courses} setCourses={setCourses} />
      <IndexMobile />
    </>
  );
};

export default index;
