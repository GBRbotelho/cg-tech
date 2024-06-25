import React, { useEffect, useState } from "react";

type CardPortalProps = {
  reverse?: boolean;
  title?: string;
  text?: string;
  img?: string;
};

function CardPortal(props: CardPortalProps) {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    const originalText =
      props.text || "Aqui fica o texto do card a sua escolha.";

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
      <div className="bg-black w-[50%]"></div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="flex flex-col w-[85%] h-[90%] justify-evenly">
          <h2 className="font-[700] text-[24px]">{props.title || "Titulo"}</h2>
          <p className="text-[11.5px] max-w-full">{truncatedText}</p>
          <div>
            <button className="text-blue-600 text-[13px]">Ler mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortal;
