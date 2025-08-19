import React, { useState } from "react";
import { InputField, Button } from "../../components";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Create your PopX account</h1>

      <form className="signup-form" onSubmit={handleSignup}>
        <InputField
          label="Full Name"
          type="text"
          required={true}
          isStar={true}
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <InputField
          label="Phone Number"
          type="tel"
          required={true}
          isStar={true}
          placeholder="Enter phone number"
          pattern="[0-9]{10}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField
          label="Email Address"
          type="email"
          required={true}
          isStar={true}
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          required={true}
          isStar={true}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          label="Company Name"
          type="text"
          required={false}
          isStar={false}
          placeholder="Enter company name (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <div className="radio-container">
          <p>
            Are you an Agency?<span style={{ color: "#DD4A3D" }}>*</span>
          </p>
          <div className="radio-options">
            <label className="radio-label" htmlFor="agency-yes">
              <input
                type="radio"
                name="agency"
                id="agency-yes"
                className="radio-option"
              />
              <span className="custom-radio"></span>
              Yes
            </label>

            <label className="radio-label" htmlFor="agency-no">
              <input
                type="radio"
                name="agency"
                id="agency-no"
                className="radio-option"
              />
              <span className="custom-radio"></span>
              No
            </label>
          </div>
        </div>

        <Button
          text="Create Account"
          bgColor={"#6C25FF"}
          txtColor={"#fff"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default SignupPage;
