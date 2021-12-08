import React from "react";
import logo from "../logowhite.png";
import './Footer.scss';

const Footer = () => {
  
    return (
      <nav className="footer">
          <h1 className="footer-logo"><img src={logo} alt="Logo" className="logo" /></h1>
          
            <ul className="footer-list">
              <li>Info</li>
              <li>Support</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
            
          <p className="copyright">© Copyright CODE5 - 2021</p>
      </nav>
    )
  }
  
  export default Footer;