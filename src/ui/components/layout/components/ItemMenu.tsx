import React from "react";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

function ItemMenu(props: Props) {
  return (
    <li
      className={`w-[70%] transition-[0.2s]  cursor-pointer hover:text-green-600 ${
        props.active
          ? "text-green-600 px-[7px] border-r-[5px] border-solid border-green-600 scale-110"
          : "text-white"
      }`}
    >
      {props.children}
    </li>
  );
}

export default ItemMenu;
