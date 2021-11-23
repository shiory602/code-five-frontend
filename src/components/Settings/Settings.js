import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import InputText from "../inputText";
import "./Setting.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Settings = () => {

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
      // uid: 
    };
    console.log(postingInfo)
  };

  return (
    <div>
      <Navbar />
      
      <div className="setting_main">
        <div className="box">
          <div className="setting_container">
            <h2>Account Setting</h2>
            <div className="setting_image">
              <AccountCircleIcon className="setting_image_icon" />
            </div>
            <div className="setting_image_plus">
              <AddCircleIcon className="setting_image_plus_icon" />
            </div>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <InputText
                  className="row-item"
                  label="USERNAME"
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <InputText
                  className="row-item"
                  label="PASSWORD"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="row">
                <InputText
                  className="row-item"
                  label="FIRST NAME"
                  placeholder="First name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <InputText
                  className="row-item"
                  label="LAST NAME"
                  placeholder="Last name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className="row">
                <InputText
                  className="row-item"
                  label="EMAIL"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="buttonContainer">
                <button className="button" variant="contained">SAVE</button>
              </div>
            </form>
            <div className="sub-message">
              <Link className="bold button-hover" to="login">CANCEL</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}  

export default Settings;