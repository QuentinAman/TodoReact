import React from "react";
import "./button.scss";

export const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      {...props}
      className={`Button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
