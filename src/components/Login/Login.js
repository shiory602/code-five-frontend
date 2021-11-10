import React from "react";
import "./Login.css";
import Button from '@mui/material/Button';
import InputText from "../inputText";

const Login = () => {
  return (
    <>
    <div className="login-main">
      <div className="leftBox">
        <div className="logo-image">
          <img src="/image/CODE5-purple.png" alt="CODE5-purple" />
          <InputText />
          <Button variant="contained">Login</Button>
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