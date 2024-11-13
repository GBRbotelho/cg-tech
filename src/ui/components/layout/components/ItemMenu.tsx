import React from "react";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

function ItemMenu(props: Props) {
  return (
    <li
      className={` ${
        props.active
          ? "text-black px-[7px] border-r-[5px] border-solid border-black scale-110"
          : "text-white"
      } w-[70%] transition-[0.2s]  cursor-pointer hover:text-blue-300 hover:border-blue-300`}
    >
      {props.children}
    </li>
  );
}

export default ItemMenu;
