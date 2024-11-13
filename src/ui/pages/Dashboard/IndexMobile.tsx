import Card from "@/ui/pages/Dashboard/components/Card";
import React from "react";

function IndexMobile() {
  return (
    <main className="flex flex-col  w-screen lg:hidden ml-[75px] pt-[60px]">
      <div className="flex flex-col">
        <h1 className="text-[35px] pt-4 pl-12 text-blue-700 font-[700]">
          Treinamentos
        </h1>
        <div className="w-[90vw] ml-12 h-1 mb-6 bg-blue-700 mt-2"></div>
      </div>

      <div className="flex px-4 mb-12 justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4">
          {/* <div className="gap-6">
            <Card
              title1="Curso"
              text1="Primeiros passos na CGTECH"
              title2="Categoria:"
              text2="Onboarding"
              classNameCard="relative left-2"
              imageSrc="https://via.placeholder.com/300" 
            />
          </div>
          <div className="gap-6">
            <Card
              title1="Curso"
              text1="Primeiros passos na CGTECH"
              title2="Categoria:"
              text2="Onboarding"
              classNameCard="relative left-2"
              imageSrc="https://via.placeholder.com/300" 
            />
          </div>
          <div className="gap-6">
            <Card
              title1="Curso"
              text1="Primeiros passos na CGTECH"
              title2="Categoria:"
              text2="Onboarding"
              classNameCard="relative left-2"
              imageSrc="https://via.placeholder.com/300"
            />
          </div>
          <div className="gap-6">
            <Card
              title1="Curso"
              text1="Primeiros passos na CGTECH"
              title2="Categoria:"
              text2="Onboarding"
              classNameCard="relative left-2"
              imageSrc="https://via.placeholder.com/300" 
            />
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default IndexMobile;
