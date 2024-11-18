import React from "react";

type Props = {
  text: string;
  children?: any;
};

function CardUnity(props: Props) {
  return (
    <div className="w-full py-10 flex flex-col justify-center items-center">
      <div
        className={`w-full overflow-hidden flex flex-col h-[400px] justify-between`}
      >
        <div className="w-full bg-black h-[90%] rounded-lg">
          {props.children}
        </div>
        <span className="font-[700] text-[21px]">{props.text}</span>
      </div>
    </div>
  );
}

export default CardUnity;
