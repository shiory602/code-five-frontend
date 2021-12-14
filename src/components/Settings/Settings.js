import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Alert, FormControlLabel, Checkbox } from '@mui/material';
import InputText from "../inputText";

import "./Setting.scss";

import avatar from "../avatar.png";

import { useAuth } from '../../contexts/AuthContext';

const Settings = () => {

  const { currentUser, currentUserDetails, updateUser } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFirstName(currentUserDetails.firstName);
    setLastName(currentUserDetails.lastName);
    setAdmin(currentUserDetails.admin);
  }, [currentUserDetails]);

  function processImage(e) {
    const imageFile = e.target.files[0];

    setProfileImage(imageFile)
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const msgError = await updateUser(email, password, profileImage, firstName, lastName, admin);

      setError(msgError);
    } catch (err) {
      setError('Failed to update the user. Please try again.');
    }

    setLoading(false);
  };

  return (
    !loading ? (<div>
      <Navbar />

      <div className="setting_main">
        <div className="box">
          <div className="setting_container">
            <h2>Account Settings</h2>

            {error !== '' ? <Alert sx={{ m: '1rem' }} severity={error === 'User updated!' ? 'success' : 'error'}>{error}</Alert> : ''}

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="setting_image">
                <img
                  src={currentUser.photoURL || avatar}
                  id="preview"
                  className="setting_image_icon" 
                  alt="icon"
                />
                <input type="file" onChange={processImage} accept="image/*" />
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
              <div className="row">
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={e => setAdmin(!admin)}
                        checked={admin}
                      />
                    }
                    label="admin user"
                  />
                </div>
              </div>
              <div className="buttons">
                <div className="button-container">
                  <button type="submit" className="button" variant="contained">SAVE</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>) : ''
  )
}  
export default Settings;