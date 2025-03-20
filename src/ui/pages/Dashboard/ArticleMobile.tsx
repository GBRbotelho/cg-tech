import React, { useState } from "react";
import Image from "next/image";
import portal4 from "@/public/imgs/Home/portal4.webp";
import { ChevronUp, ChevronDown, Play } from "lucide-react";
import Link from "next/link";
import { Course } from "@/core/domain/entities/course";
import { Lesson } from "@/core/domain/entities/lesson";

type Props = {
  course: Course | null;
  lessons: Lesson[];
  setCourse: React.Dispatch<React.SetStateAction<null | Course>>;
};

function ArticleDesktop(props: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className=" flex-col w-screen lg:hidden ml-[75px] pt-[40px]">
      <div className="flex bg-[#24242f] w-full h-[550px] md:h-[250px] text-white flex-col justify-center md:flex-row pt-6">
        <div className="flex w-full justify-center items-center min-h-[150px] h-full max-h-[250px]">
          {props.course?.thumbnail && (
            <div className="relative min-w-[150px] min-h-[150px] h-full w-full max-w-[370px] max-h-[250px]">
              <Image
                fill={true}
                className="py-8 px-12"
                src={props.course?.thumbnail || ""}
                alt="Portal 1"
              />
            </div>
          )}
        </div>
        <div className="pt-6 w-full md:px-0 px-8">
          <h1 className="text-[25px] font-[700]">{props.course?.title}</h1>
          <p className="text-[17px] md:max-w-[60%] pt-2">
            {props.course?.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-2 border-blue-700 w-[95%] mt-12 mb-6">
          <div
            className="bg-[#e1e1e1] border-blue-700 h-[50px] w-[100%] flex items-center cursor-pointer"
            onClick={toggleOpen}
          >
            {isOpen ? (
              <ChevronDown className="ml-4 w-8 h-8" />
            ) : (
              <ChevronUp className="ml-4 w-8 h-8" />
            )}
            <span className="ml-2">{props.course?.title}</span>
          </div>
          {isOpen && (
            <div className="p-4 h-fit border-t-2 border-blue-700">
              <ul className="space-y-4 text-[17px] pt-2">
                {props.lessons && props.lessons.length > 0 ? (
                  props.lessons.map((lesson) => (
                    <li className="flex items-center" key={lesson.id}>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-green-500">
                        <Link
                          href={
                            "/dashboard/courses/" +
                            props.course?.id +
                            "/" +
                            lesson.id
                          }
                          className="text-white cursor-pointer"
                        >
                          <Play className="h-5 w-5" />
                        </Link>
                      </div>
                      <span className="flex-1 pl-2">{lesson.title}</span>
                      {/* <span>10m</span> */}
                    </li>
                  ))
                ) : (
                  <div className="text-center text-[18px] text-gray-500">
                    Não há aulas disponíveis no momento.
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ArticleDesktop;
