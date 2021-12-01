import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import InputText from "../inputText";
import "./Setting.scss";

const Settings = () => {

  let [userName, setUserName] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [fileUrl, setFileUrl] = useState(null);

  function processImage(event){
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const postingInfo = {
      profile: {
        userName,
        firstName,
        lastName,
        email,
        password, 
        fileUrl 
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
              <img
                src={fileUrl}
                id="preview"
                className="setting_image_icon" 
                alt="icon"
              />
              <input type="file" onChange={processImage} accept="image/*" />
            </div>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="USERNAME"
                    placeholder="Username"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </div>
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="PASSWORD"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="row">
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="FIRST NAME"
                    placeholder="First name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="LAST NAME"
                    placeholder="Last name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="EMAIL"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="buttons">
                <div className="button-container">
                  <button className="button" variant="contained">SAVE</button>
                </div>
                <div className="sub-message">
                  <Link className="bold button-hover" to="/">CANCEL</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}  
export default Settings;