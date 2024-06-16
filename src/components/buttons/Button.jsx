import React from "react";
import style from "./Button.module.css";

export const Button = ({ children, handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      {children}
    </button>
  );
};
