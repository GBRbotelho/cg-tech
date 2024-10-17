/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

type CardPortalProps = {
  reverse?: boolean;
  title?: string;
  text?: string;
  img?: string;
  children?: React.ReactNode;
};

function CardPortal(props: CardPortalProps) {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    const originalText = props.text || "";

    const maxLength = 180;
    if (originalText.length > maxLength) {
      setTruncatedText(originalText.substring(0, maxLength - 3) + "...");
    } else {
      setTruncatedText(originalText);
    }
  }, []);

  return (
    <div
      className={`flex bg-white h-[180px] ${
        props.reverse && "flex-row-reverse"
      }`}
    >
      <div className="w-[50%] overflow-hidden">{props.children}</div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="flex flex-col w-[85%] h-[90%] justify-evenly">
          <h2 className="font-[700] text-[24px]">{props.title || "Titulo"}</h2>
          <p className="text-[11.5px] max-w-full">{truncatedText}</p>
          <div>
            <button className="text-blue-600 text-[13px]">Em breve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortal;
