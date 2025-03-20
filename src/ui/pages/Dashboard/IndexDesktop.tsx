import { Course } from "@/core/domain/entities/course";
import courses from "@/pages/api/courses";
import Card from "@/ui/pages/Dashboard/components/Card";
import React, { useEffect, useState } from "react";

type Props = {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<[] | Course[]>>;
};

function IndexDesktop(props: Props) {
  return (
    <main className="hidden flex-col w-screen lg:flex ml-[75px] pt-[60px]">
      <div className="flex flex-col">
        <h1 className="text-[35px] pt-4 pl-12 text-blue-700 font-[700]">
          Treinamentos
        </h1>
        <div className="w-[90vw] h-1 ml-12 mb-6 bg-blue-700 mt-2"></div>
      </div>

      <div className="flex px-4 mb-12">
        <div className="grid md:grid-cols-4 gap-4">
          {props.courses && props.courses.length > 0 ? (
            props.courses.map((course, index) => (
              <div className="gap-6" key={index}>
                <Card
                  id={course.id}
                  title1="Curso"
                  text1={course.title}
                  title2="Categoria:"
                  text2={course.category}
                  classNameCard="relative left-2"
                  imageSrc={course.thumbnail}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-500">
              Não há cursos disponíveis no momento.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default IndexDesktop;
