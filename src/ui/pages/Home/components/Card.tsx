import React from "react";

function Card() {
  return (
    <div className="w-[90%] overflow-hidden rounded-[15px] flex flex-col h-[400px] justify-between">
      <div className="bg-black h-[160px]"></div>
      <div className="w-80%">
        <h2 className="font-[800] text-[26px]">Portaria e vigia</h2>
        <p>
          um dia ensolarado de primavera, as folhas dançavam ao sabor do vento
          enquanto o sol derramava seus raios dourados sobre a cidade.
        </p>
      </div>
      <button>Quero ser cliente</button>
    </div>
  );
}

export default Card;
