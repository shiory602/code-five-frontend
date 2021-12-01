import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import "../../scss-config/material-ui.scss"
import InputText from "../inputText";
import { v4 as uuid } from 'uuid';

const Register = () => {

  let [userName, setUserName] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const postingInfo = {
      profile: {
        userName,
        firstName,
        lastName,
        email,
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
    <div className="register-main">
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
            <InputText
              label="FIRST NAME"
              placeholder="First name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <InputText
              label="LAST NAME"
              placeholder="Last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <InputText
              label="EMAIL"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="buttonContainer">
              <button className="button" variant="contained" type="submit">Register</button>
            </div>
          </form>
          <div className="sub-message">
            <p>I already have an account! Click here to
              <Link className="bold button-hover" to="login"> Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="rightBox-img">
          <img src="/image/register.png" alt="register" />
        </div>
        {/* <div className="triangle"></div> */}
      </div>
    </div>
    </>
  )
}

export default Register;