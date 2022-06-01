import React from "react";
import "./input.scss";

export const Input = ({ value, placeholder, onChange, onEnter, className = "", error }) => {
  return (
    <div className={`Input ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="Input-field"
        id="add-todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter();
          }
        }}
      />
      <label
        className={`Input-label ${value.length > 0 ? "Input-label--active" : ""}`}
        htmlFor="add-todo"
      >
        {placeholder}
      </label>
      {error && <span className="Input-error">{error}</span>}
    </div>
  );
};
