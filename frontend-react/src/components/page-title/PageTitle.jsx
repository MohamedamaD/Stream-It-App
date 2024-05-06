import React from "react";
import "./PageTitle.scss";
import { Link } from "react-router-dom";
export const PageTitle = ({ title = "" }) => {
  return (
    <div className="__page-title">
      <div className="container">
        <h1>{title}</h1>
        <p>
          <Link to="/">Home - </Link>
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
};
