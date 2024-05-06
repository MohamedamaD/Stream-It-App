import React from "react";
import "./Loading.scss";
import { images } from "../../constants";
export const Loading = () => {
  return (
    <div className="__loading-page">
      <div className="container __loading__container">
        <img src={images.LOADER} alt="loader-img" />
      </div>
    </div>
  );
};
