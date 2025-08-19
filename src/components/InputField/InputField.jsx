// src/components/InputField.jsx
import React from "react";
import "./InputField.css";

const InputField = ({ label, type = "text", placeholder, required, isStar, value, pattern, onChange }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}{isStar && <span className="required-star">*</span>}</label>}
      <input
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
