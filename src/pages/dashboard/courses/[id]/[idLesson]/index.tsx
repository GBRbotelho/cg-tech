import { Course } from "@/core/domain/entities/course";
import { Lesson } from "@/core/domain/entities/lesson";
import { NotionGateway } from "@/core/infra/gateways/notion-gateway";
import ClientsDesktop from "@/ui/pages/Dashboard/ClientsDesktop";
import ClientsMobile from "@/ui/pages/Dashboard/ClientsMobile";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

interface LessonProps {
  id: string;
  idCourse: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { idLesson, id } = context.params as { idLesson: string; id: string };

  return {
    props: { id: idLesson, idCourse: id },
  };
};
function LessonPage({ id, idCourse }: LessonProps) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [course, setCourse] = useState<Course | null>(null);

  const getLesson = async () => {
    const response: any = await NotionGateway.getLessonId(id);
    console.log(response);
    setLesson(response.data);
  };

  const getCourse = async () => {
    const response: any = await NotionGateway.getCourseId(idCourse);
    setCourse(response.data);
  };

  useEffect(() => {
    getLesson();
    getCourse();
  }, []);

  return (
    <>
      <ClientsDesktop course={course} lesson={lesson} setLesson={setLesson} />
      <ClientsMobile course={course} lesson={lesson} setLesson={setLesson} />
    </>
  );
}

export default LessonPage;
