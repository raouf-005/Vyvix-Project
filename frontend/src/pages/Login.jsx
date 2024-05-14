import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import LoginImg from "./../assets/LoginImg.svg";
import VyvixLogo from "./../assets/VyvixLogo.svg";
import RegisterForm from "./../logincomponents/RegisterForm";
import LoginForm from "./../logincomponents/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login({ Page }) {
  const location = useLocation().pathname.split("/")[1];
  const [desiredPage, setDesiredPage] = useState(Page);
  const [formselected, setFormSelected] = useState(
    desiredPage === "register" ? true : false
  );
  const navigate = useNavigate();
  useEffect(() => {
    const btnSlide = document.getElementById("btnSlider");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    if (desiredPage === "register") {
      btnSlide.style.left = "0";
      loginBtn.style.color = "rgba(75, 44, 250, 1)";
      registerBtn.style.color = "white";
      setFormSelected(true);
    } else {
      btnSlide.style.left = "50.7%";
      registerBtn.style.color = "rgba(75, 44, 250, 1)";
      loginBtn.style.color = "white";

      setFormSelected(false);
    }
  }, [desiredPage]);

  useEffect(() => {
    if (location === "register") {
      setFormSelected(true);
      setDesiredPage("register");
    } else {
      setFormSelected(false);
      setDesiredPage("login");
    }
  }, [location]);

  const handleFormChange = (e) => {
    const btnSlide = document.getElementById("btnSlider");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    if (e.target.innerText === "Sign Up") {
      btnSlide.style.left = "0px";
      loginBtn.style.color = "rgba(75, 44, 250, 1)";
      e.target.style.transition = "color 0.1s linear 0.12s";
      e.target.style.color = "white";
      //window.location.href='register'
      navigate("/register");
      setFormSelected(true);
    } else {
      btnSlide.style.left = "50.7%";
      registerBtn.style.color = "rgba(75, 44, 250, 1)";
      e.target.style.transition = "color 0.1s linear 0.12s";
      e.target.style.color = "white";
      //window.location.href='login'
      navigate("/login");
      setFormSelected(false);
    }
  };

  return (
    <div className="flex  max-h-screen    justify-start">
      <div className="  max-h-screen mobile:hidden sm:flex   items-center  justify-center ">
        <img src={LoginImg} alt="LoginImg" className="loginPhoto " />
      </div>
      <div className="  flex  flex-col -mt-3 flex-1 justify-center items-center  ">
        <img src={VyvixLogo} alt="VyvixLogo" className="mb-2  w-12  " />
        <h4>Welcome to Vyvix!</h4>
        <div
          className="mt-6 mb-4 buttonsHolder"
          onClick={(e) => handleFormChange(e)}
        >
          <div id="btnSlider"></div>
          <button
            className={`p-5 px-12  toggle-btn ${
              formselected ? "text-white" : ""
            }`}
            id="register"
          >
            Sign Up
          </button>
          <button className="p-5  px-12 toggle-btn" id="login">
            Sign In
          </button>
        </div>

        <p className=" text-center text-wrap flex max-w-md mb-1 ">
          {!formselected
            ? "Welcome back to Vyvix! Sign in here to access your account and continue your journey with us."
            : "Welcome to our Registration page on Vyvix! Sign up here to create your account and join our community."}
        </p>
        {formselected ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}
