import React from "react";

export const Icon = ({ name = "__", width = 20, height = width, icon_url, className = "" }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
    >
      <use xlinkHref={icon_url || "/icons.svg#icon-" + name}></use>
    </svg>
  );
};
