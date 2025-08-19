import React from "react";
import Button from "../../components/Button";
import "./LandingPage.css";

const LandingPage = () => {
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
          <Button text="Create Account" bgColor={"#6C25FF"} txtColor={"#fff"} />
          <Button
            text="Already Registered? Login"
            bgColor={"#6C25FF4B"}
            txtColor={"#1D2226"}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
