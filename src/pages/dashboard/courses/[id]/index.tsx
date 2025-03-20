import { Course } from "@/core/domain/entities/course";
import { NotionGateway } from "@/core/infra/gateways/notion-gateway";
import Navbar from "@/ui/components/layout/Navbar";
import ArticleDesktop from "@/ui/pages/Dashboard/ArticleDesktop";
import ArticleMobile from "@/ui/pages/Dashboard/ArticleMobile";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Lesson } from "@/core/domain/entities/lesson";

interface ArticleProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: { id },
  };
};

function Article({ id }: ArticleProps) {
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const getCourses = async () => {
    const response: any = await NotionGateway.getCourseId(id);
    setCourse(response.data);
  };

  const getLessonsCourse = async () => {
    const response: any = await NotionGateway.getCourseIdLessons(id);
    setLessons(response.data);
  };

  useEffect(() => {
    getCourses();
    getLessonsCourse();
  }, []);

  return (
    <>
      <ArticleDesktop lessons={lessons} course={course} setCourse={setCourse} />
      <ArticleMobile lessons={lessons} course={course} setCourse={setCourse} />
    </>
  );
}

export default Article;

{
  /*}
            <div className="flex justify-center">
                <div className="border-2 border-blue-700 h-[300px] w-[95%] mt-12">
                    <div className="bg-[#e1e1e1] border-b-2 border-blue-700 h-[50px] w-[100%] flex items-center">
                        <ChevronUp className="ml-4 w-8 h-8 "/>
                        Uniforme
                    </div>
                </div>
            </div>
            {*/
}
