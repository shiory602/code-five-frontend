import React, { useState } from "react";
import "./Login.scss";
import "../../scss-config/material-ui.scss"
import InputText from "../inputText";

const Login = () => {

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
    <div className="login-main">
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
              label="PASSWORD"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="buttonContainer">
              <button className="button" variant="contained">Login</button>
            </div>
          </form>
          <div className="sub-message">
            <p>Don't have an account yet? Click here to 
              <button className="bold button-hover"> Register</button>
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

export default Login;