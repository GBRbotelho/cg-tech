import React from "react";
import Image from "next/image";
import portal4 from "@/public/imgs/Home/portal4.webp";
import { Course } from "@/core/domain/entities/course";
import { Lesson } from "@/core/domain/entities/lesson";
import { Video } from "@/ui/components/utils/Video";

type Props = {
  course: Course | null;
  setLesson: React.Dispatch<React.SetStateAction<null | Lesson>>;
  lesson: Lesson | null;
};
function ClientsMobile(props: Props) {
  return (
    <main className=" flex-col w-screen lg:hidden ml-[75px] pt-[40px]">
      <div className="flex justify-center items-center bg-[#24242f] w-full h-[550px] md:h-[250px] text-white flex-col md:flex-row pt-6">
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
        <div className="pt-6 w-full md:px-0 px-8">
          <h1 className="text-[25px] font-[700]">{props.lesson?.title}</h1>
          <p className="text-[17px] md:max-w-[60%] pt-2">
            {props.lesson?.description}
          </p>
        </div>
      </div>
      <div className="w-[100%] px-8 pt-8 pb-12">
        <p className="text-[17px]">
          {props.lesson?.text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <Video
          link={props.lesson?.url || ""}
          thumbnail={props.course?.thumbnail || ""}
        />
      </div>
    </main>
  );
}

export default ClientsMobile;
