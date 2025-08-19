import React from "react";
import { Button } from "../../components/index.js";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading">Welcome to PopX</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="button-container">
          <Button
            text="Create Account"
            bgColor={"#6C25FF"}
            txtColor={"#fff"}
            onClick={() => {
              navigate("/signup");
            }}
          />
          <Button
            text="Already Registered? Login"
            bgColor={"#6C25FF4B"}
            txtColor={"#1D2226"}
            onClick={() => {
              navigate("/login");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
