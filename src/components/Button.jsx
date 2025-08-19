import React from "react";
import "./Button.css";

const Button = ({ text = "Button", bgColor, txtColor }) => {
  return (
    <button
      className="primary-btn"
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {text}
    </button>
  );
};

export default Button;
