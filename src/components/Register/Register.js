import React, { useState } from "react";
import "./Register.scss";
import "../../scss-config/material-ui.scss"
import InputText from "../inputText";

const Register = () => {

  let [userName, setUserName] = useState("");
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
    <div className="register-main">
      <div className="leftBox">
        <div className="leftBox-container">
          <div className="logo-image">
            <img src="/image/CODE5-purple.png" alt="CODE5-purple" />
          </div>
          <form>
            <InputText
              label="USERNAME"
              placeholder="Username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <InputText
              label="FULL NAME"
              placeholder="Full name"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <InputText
              label="EMAIL"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputText
              label="PASSWORD"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="buttonContainer">
              <button className="button" variant="contained">Register</button>
            </div>
          </form>
          <div className="sub-message">
            <p>I already have an account! Click here to
              <button className="bold button-hover"> Login</button>
            </p>
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="triangle"></div>
      </div>
    </div>
    </>
  )
}

export default Register;