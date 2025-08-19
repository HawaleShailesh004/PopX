// src/components/InputField.jsx
import React from "react";
import "./InputField.css";

const InputField = ({ id, label, type = "text", placeholder, required, isStar, value, pattern, onChange }) => {
  return (
    <div className="input-container">
       {label && <label htmlFor={id} className="input-label">{label}{isStar && <span>*</span>}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        pattern={pattern}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

export default InputField;
