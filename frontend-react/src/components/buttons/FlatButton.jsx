import React from "react";
import "./Buttons.scss";
export const FlatButton = ({ value, className = "", onClick = () => {} }) => {
  return <button className={`__flat-button ${className}`}>{value}</button>;
};

export const CustomButton = ({
  value = "",
  className = "",
  onClick = () => {},
}) => {
  return (
    <button className={`__c-btn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};
