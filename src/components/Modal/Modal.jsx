import React from "react";
import "./modal.scss";

export const Modal = ({ children, onClose }) => {
  return (
    <div
      className="Modal"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="Modal-content">{children}</div>
    </div>
  );
};
