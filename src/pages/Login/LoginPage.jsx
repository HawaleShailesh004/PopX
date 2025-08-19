import React, { useState } from "react";
import { InputField, Button } from "../../components";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Signin to your PopX account</h1>
      <p className="login-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="input-form" onSubmit={handleLogin}>
        <InputField
          label="Email Address"
          type="email"
          required={true}
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          required={true}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          bgColor={"#CBCBCB"}
          txtColor={"#fff"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default LoginPage;
