import React from "react";

type ButtonProps = {
  typeStyle?: string;
  name: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
};

function Button(props: ButtonProps) {
  return (
    <button
      className={`transition-[0.2s] text-[21px] py-[11px] rounded-md bg-${
        props.bgColor || "black"
      } text-${props.textColor || "white"}  font-[800] ${props.className} `}
    >
      {props.name}
    </button>
  );
}

export default Button;
