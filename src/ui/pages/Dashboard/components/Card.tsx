/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ArrowRight } from "lucide-react";
import sobre from "@/public/imgs/Sobre/backgroundsobre.webp";
import Image from "next/image";

type CardProps = {
  classNameCard?: string;
  opacity?: string;
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  imageSrc?: any; // Prop para a imagem
};

function Card(props: CardProps) {
  return (
    <div
      className={`bg-[#f5f5f5] hover:bg-gradient-to-b hover:from-[#5a77ff] hover:to-[#1b4391] hover:text-white rounded-lg pl-3 pr-3 py-3 group ${
        props.classNameCard || ""
      }`}
    >
      <div className="min-w-[40px] max-w-[250px]">
        {props.imageSrc && (
          <Image
            src={sobre}
            alt="Imagem do Card"
            height={200}
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex flex-col">
          <div>
            <h1 className="text-blue-700 font-[700] group-hover:text-white transition-colors duration-300">
              {props.title1}
            </h1>
          </div>
          <p className="text-[16px] transition-colors duration-300">
            {props.text1}
          </p>
          <div>
            <h1 className="text-blue-700 font-[700] pt-4 group-hover:text-white transition-colors duration-300">
              {props.title2}
            </h1>
          </div>
          <p className="text-[16px] transition-colors duration-300">
            {props.text2}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-white">
            <a
              href="dashboard/article"
              className="text-white group-hover:text-blue-700 w-15 cursor-pointer"
            >
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
