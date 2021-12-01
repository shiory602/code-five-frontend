import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputText from "../inputText";

import "./Login.scss";
import "../../scss-config/material-ui.scss";

import { useAuth } from '../../contexts/AuthContext';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { loginUser } = useAuth();

  const redirect = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await setError('');
      await loginUser(email, password);
      redirect.push('/');
    } catch (error) {
      await setError('Sorry, your email or password was incorrect. Please try again.');      
    }
  };

  return (
    <>
    <div className="login-main">
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
            <InputText
              label="PASSWORD"
              placeholder="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="buttonContainer">
              <button className="button" variant="contained">Login</button>
            </div>
          </form>
          <div className="sub-message">
            <p>
              Don't have an account yet? Click here to <Link className="bold button-hover" to="register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="rightBox"></div>
    </div>
    </>
  )
}

export default Login;