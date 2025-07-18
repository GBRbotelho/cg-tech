import React from "react";

export default function ItemFooter(props: any) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold lg:text-[13px] 2xl:text-[15px] text-center">
        {props.city}
      </h2>
      <p className="text-[10px] text-center 2xl:text-[13px]">{props.street}</p>
      <p className="text-[10px] text-center 2xl:text-[13px]">
        {props.district}
      </p>
    </div>
  );
}
