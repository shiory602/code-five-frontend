import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Settings.css";

const Settings = () => {
    return (
      <div>
        <Navbar />
        <div className="settings-container">
            <div className="settings-box">
                <div className="settings-page">
                    <h3>Settings</h3>

                    
                    <div className="buttonContainer">
                        <button className="button" variant="contained">Dashboard...</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Settings;