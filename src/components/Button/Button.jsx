import React from "react";
import "./button.scss";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`Button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
