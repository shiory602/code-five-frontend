import React, { useState } from "react";
import "./Login.scss";
import Button from '@mui/material/Button';
import InputText from "../inputText";

const Login = () => {

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
    <div className="login-main">
      <div className="leftBox">
        <div className="logo-image">
          <img src="/image/CODE5-purple.png" alt="CODE5-purple" />
        </div>
        <form>
          <InputText
            placeholder="Your Username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <InputText
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button variant="contained">Login</Button>
        </form>
      </div>
      <div className="rightBox">
        <div className="triangle"></div>
      </div>
    </div>
    </>
  )
}

export default Login;