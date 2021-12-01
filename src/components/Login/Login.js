import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import "../../scss-config/material-ui.scss"
import InputText from "../inputText";
import { v4 as uuid } from 'uuid';

const Login = () => {

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const postingInfo = {
      profile: {
        userName,
        password, 
      },
      uid: uuid()
    };
    console.log(postingInfo)
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // setUser(postingInfo);
    //     insertUser(postingInfo, userCredential.user.uid);
    //     setStep(step + 1);
    //   })
      // .catch(e => {
      //   console.error(`Error happened: ${e}`);
      // })
  };

  return (
    <>
    <div className="login-main">
      <div className="leftBox">
        <div className="leftBox-container">
          <div className="logo-image">
            <img src="/image/CODE5-purple.png" alt="CODE5-purple" />
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
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
            <Link className="bold button-hover" to="register"> Register</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="rightBox-img">
          <img src="/image/login.png" alt="login" />
        </div>
        {/* <div className="triangle"></div> */}
      </div>
    </div>
    </>
  )
}

export default Login;