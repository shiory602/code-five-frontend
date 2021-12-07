import React, { useState } from "react";
import logo from "../logowhite.png";
import avatar from "../avatar.png";
import { MenuItems } from "./MenuItems";
import "../../scss-config/material-ui.scss";

import './Navbar.scss';

import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const { currentUser, currentUserDetails, logoutUser } = useAuth();

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.error('Failed to log out an account. Please try again.');
    };
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo"><img src={logo} alt="Logo" className="logo" /></h1>
    

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <div id="icon">{item.icon}</div>
                <div id="title">{item.title}</div> 
              </a>
            </li>
          )
        })}
        <div className="navbar-avatar">
          <img src={avatar} alt="Avatar" className="avatar"/>
          <h3>
            {currentUser.email}<br />
            {currentUserDetails.firstName} {currentUserDetails.lastName}<br />
          </h3>
        </div>
        <div className="btn-signout">
          <button onClick={handleLogout} className="button">LOG OUT</button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;