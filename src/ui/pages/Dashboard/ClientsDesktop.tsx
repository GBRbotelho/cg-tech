import React from "react";
import Image from "next/image";
import portal4 from "@/public/imgs/Home/portal4.webp";
import { Lesson } from "@/core/domain/entities/lesson";
import { Course } from "@/core/domain/entities/course";
import { Video } from "@/ui/components/utils/Video";

type Props = {
  course: Course | null;
  setLesson: React.Dispatch<React.SetStateAction<null | Lesson>>;
  lesson: Lesson | null;
};
function ClientsDesktop(props: Props) {
  return (
    <main className=" hidden flex-col w-screen lg:flex ml-[75px] pt-[40px]">
      <div className="flex bg-[#24242f] w-full h-[250px] text-white">
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
        <div className="pt-8 w-full">
          <h1 className="text-[25px] font-[700]">{props.lesson?.title}</h1>
          <p className="text-[17px] max-w-[50%] pt-2">
            {props.lesson?.description}
          </p>
        </div>
      </div>
      <div className="w-[60%] pl-8 pt-8 mb-12">
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

export default ClientsDesktop;
