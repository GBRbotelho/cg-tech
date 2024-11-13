import React, { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [color, setColor] = useState("rgb(8 145 178)");

  return (
    <div className="fixed bg-white bg-opacity-60 top-0 left-0 w-screen h-screen flex items-center justify-center z-[2000]">
      <div className="sweet-loading">
        <RingLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loading;
