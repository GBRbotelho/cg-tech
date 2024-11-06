/* eslint-disable react-hooks/exhaustive-deps */

import { cn } from "@/ui/components/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CardPortalProps = {
  reverse?: boolean;
  title?: string;
  text?: string;
  img?: string;
  children?: React.ReactNode;
  link?: string;
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
      className={cn(
        "flex bg-white flex-col h-[250px] sm:h-[180px] sm:flex-row",
        props.reverse ? "sm:flex-row-reverse" : ""
      )}
    >
      <div className="w-full sm:w-[50%] overflow-hidden">
        <Image
          src={props.img || ""}
          width={1000}
          height={500}
          alt="Portal 1"
          className="w-full object-fill h-full"
        />
      </div>
      <div className="w-full sm:w-[50%] flex items-center justify-center">
        <div className="flex flex-col w-[85%] h-[90%] justify-evenly">
          <h2 className="font-[700] text-[24px]">{props.title || "Titulo"}</h2>
          <p className="text-[11.5px] max-w-full">{truncatedText}</p>
          <div>
            <Link
              href={props.link || ""}
              target="_blank"
              className="text-blue-600 text-[13px]"
            >
              Acessar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortal;
