import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import InputText from "../inputText";
import "./Setting.scss";
import avatar from "../avatar.png";
import { useAuth } from '../../contexts/AuthContext';
import { firestore } from '../../firebase';

const Settings = () => {

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [fileUrl, setFileUrl] = useState(avatar);
  const { currentUser, currentUserDetails, updateUser } = useAuth();

  function processImage(event){
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl)
  }

  async function onSubmit(e) {
    e.preventDefault();
    const postingInfo = {
      profile: {
        firstName,
        lastName,
        email,
        password, 
        fileUrl 
      },
      // uid: 
    };
    console.log({...currentUserDetails, ...currentUser, email : email }, "Updated");
    try {
      await updateUser({currentUser, email : email })
      alert("Successfully updated");
    } catch (error) {
      console.log(error);
    }
  };

  function onClick(e) {
    e.preventDefault(e);
    setEmail(currentUser.email);
    setPassword(currentUser.password);
    setFirstName(currentUserDetails.firstName);
    setLastName(currentUserDetails.lastName);
    console.log(currentUserDetails)
  }


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
                    label="EMAIL"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="row-container">
                  <InputText
                    className="row-item"
                    label="LAST NAME"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>
              <div className="buttons">
                <div className="button-container">
                  <button type="submit" className="button" variant="contained">SAVE</button>
                </div>
                <div className="sub-message">
                  <button onClick={(e)=>onClick(e)} className="bold button-hover">RESET</button>
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