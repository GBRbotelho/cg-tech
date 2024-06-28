import Button from "@/ui/components/utils/Button";
import React from "react";

type CardProps = {
  active: boolean;
};

function Card(props: CardProps) {
  return (
    <div className="w-full py-10 flex flex-col justify-center items-start">
      <div
        className={`w-[95%] overflow-hidden rounded-[15px] flex flex-col h-[490px] justify-between ${
          props.active ? "boxShadow" : ""
        }`}
      >
        <div className="bg-black h-[200px]"></div>
        <div className="relative w-full bottom-[30px] flex flex-col items-center">
          <div className="flex flex-col items-center w-[85%] gap-5">
            <h2 className="font-[800] text-[27px] w-full">Portaria e vigia</h2>
            <p className="text-[15px]">
              um dia ensolarado de primavera, as folhas dançavam ao sabor do
              vento enquanto o sol derramava seus raios dourados sobre a cidade.
            </p>
          </div>
        </div>
        <div className="flex relative flex-col mb-6 w-full items-center">
          <div className="w-[80%] flex flex-col">
            <Button bgColor=" gradientBackground" name="Quero ser cliente" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
