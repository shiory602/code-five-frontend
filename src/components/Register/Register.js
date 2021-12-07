import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputText from "../inputText";

import "./Register.scss";
import "../../scss-config/material-ui.scss";

import { useAuth } from '../../contexts/AuthContext';

const Register = () => {

  const [email, setEmail] = useState('');
  // const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser } = useAuth();

  const redirect = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await setError('');
      const msgError = await createUser(email, password, firstName, lastName);

      if (msgError === '') redirect.push('/');
      else setError(msgError);
    } catch (err) {
      await setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <>
      <div className="register-main">
        <div className="leftBox">
          <div className="leftBox-container">
            <div className="logo-image">
              <img src="/image/CODE5-purple.png" alt="CODE5-purple" />
            </div>
            {error !== '' ? error : '' }
            <form onSubmit={onSubmit}>
              <InputText
                label="EMAIL"
                placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              {/* <InputText
                label="USERNAME"
                placeholder="Username"
                type="text"
                onChange={e => setUserName(e.target.value)}
                value={userName}
              /> */}
              <InputText
                label="FIRST NAME"
                placeholder="First name"
                type="text"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
              />
              <InputText
                label="LAST NAME"
                placeholder="Last name"
                type="text"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
              />
              <InputText
                label="PASSWORD"
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <div className="buttonContainer">
                <button className="button" variant="contained" type="submit">Register</button>
              </div>
            </form>
            <div className="sub-message">
              <p>
                Already have an account? Click here to <Link className="bold button-hover" to="login">Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="rightBox">
          <div className="rightBox-img">
            <img src="/image/register.png" alt="register" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;