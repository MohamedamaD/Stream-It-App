import React, { forwardRef } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "./Arrows.scss";
const Prev = forwardRef((props, ref) => {
  return (
    <div className="__utils-icon __prev" ref={ref}>
      <BiLeftArrowCircle className="__icon" />
    </div>
  );
});

const Next = forwardRef((props, ref) => {
  return (
    <div className="__utils-icon __next" ref={ref}>
      <BiRightArrowCircle className="__icon" />
    </div>
  );
});

export const Arrows = { Prev, Next };
