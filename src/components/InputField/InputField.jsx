// src/components/InputField.jsx
import React from "react";
import "./InputField.css";

const InputField = ({ label, type = "text", placeholder, required, value, onChange }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

export default InputField;
