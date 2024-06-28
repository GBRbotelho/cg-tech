import React from "react";

function CardUnity() {
  return (
    <div className="w-full py-10 flex flex-col justify-center items-center">
      <div
        className={`w-full overflow-hidden flex flex-col h-[400px] justify-between`}
      >
        <div className="w-full bg-black h-[90%] rounded-lg"></div>
        <span className="font-[700] text-[21px]">Campinas</span>
      </div>
    </div>
  );
}

export default CardUnity;
