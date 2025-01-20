import Image from "next/image";
import React from "react";

type Props = {
  children?: React.ReactNode;
  src: string;
  onClick?: () => void;
};

function CardJornal(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className="w-[90%] aspect-[2/1] min-h-[100px] bg-gray-200"
    >
      <Image src={props.src} fill alt="Imagem Slide" />
    </div>
  );
}

export default CardJornal;
