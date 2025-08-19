import React from "react";
import "./Button.css";

const Button = ({
  onClick,
  text = "Button",
  bgColor,
  txtColor,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="primary-btn"
      style={{ backgroundColor: bgColor, color: txtColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
