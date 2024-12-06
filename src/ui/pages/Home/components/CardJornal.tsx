import Image from "next/image";
import React from "react";

type Props = {
  children?: React.ReactNode;
  src: string;
};

function CardJornal(props: Props) {
  return (
    <div className="w-[90%] aspect-[2/1] bg-gray-200">
      <Image src={props.src} fill alt="Imagem Slide" />
    </div>
  );
}

export default CardJornal;
