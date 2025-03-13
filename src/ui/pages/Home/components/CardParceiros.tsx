import { Button } from "@/components/ui/button";
import React from "react";

type CardProps = {
  active: boolean;
  label: string;
  text: string;
  children?: React.ReactNode;
};

function CardParceiros(props: CardProps) {
  return (
    <div className="w-full py-10 flex flex-col justify-center items-start">
      <div
        className={`w-[95%] overflow-hidden rounded-[15px] flex flex-col h-[550px] justify-between 
          `}
        // ${props.active ? "boxShadow" : ""}
      >
        <div className="h-[300px] overflow-y-hidden overflow-hidden">
          {props.children}
        </div>
        <div className="relative w-full bottom-[0px] flex flex-col items-center">
          <div className="flex flex-col items-center w-[85%] gap-5">
            <h2 className="font-[800] text-[27px] w-full">{props.label}</h2>
            <p className="text-[15px]">{props.text}</p>
          </div>
        </div>
        <div className="flex relative flex-col mb-6 w-full items-center">
          <div className="w-[80%] flex flex-col">
            <a
              href="https://wa.me/5519974017905?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="ablank"
            >
              <Button className="bg-blue-600 transition duration-100 hover:bg-blue-600 hover:bg-opacity-90">
                Acessar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardParceiros;
