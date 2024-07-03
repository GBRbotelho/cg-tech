import React from "react";

type TestimonialProps = {
  classNameCard?: string;
  opacity?: string;
  label: string;
  text: string;
};

function Testimonial(props: TestimonialProps) {
  return (
    <div
      className={`gradientBackground h-[170px] relative rounded-lg pl-3 pr-8 py-3 flex w-fit items-center gap-3 text-white ${
        props.classNameCard || ""
      }`}
    >
      <div className="w-[55px] relative bottom-7 min-w-[55px] min-h[55px] h-[55px] flex items-center justify-center bg-slate-400 rounded-full">
        <h1 className="w-fit h-fit text-[25px] font-[700]">{props.label[0]}</h1>
      </div>
      <div className="w-full max-w-[260px] flex flex-col gap-3">
        <div>
          <h1 className="font-[700]">{props.label}</h1>
          <i></i>
        </div>
        <p className="text-[14px] leading-[15px]">{props.text}</p>
      </div>
      {props.opacity && (
        <div
          className={`absolute h-full bg-black bg-opacity-15 rounded-lg flex left-0 w-full`}
        ></div>
      )}
    </div>
  );
}

export default Testimonial;
