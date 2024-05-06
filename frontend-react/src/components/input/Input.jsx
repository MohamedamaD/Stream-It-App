import React from "react";
import "./Input.scss";
export const Input = ({
  type = "text",
  className = "",
  labelValue = "",
  placeholder = "",
  id = "",
  onchange = (ev) => {},
}) => {
  return (
    <div className={`input-fields ${className}`}>
      {labelValue && <label htmlFor={id}>{labelValue}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
};

export const TextArea = ({
  name = "",
  id = "",
  label = "",
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`input-fields ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea placeholder={placeholder} name={name} id={id}></textarea>
    </div>
  );
};
