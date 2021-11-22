import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Settings.css";
import {Link } from "react-router-dom";

const Settings = () => {
    return (
      <div>
        <Navbar />
        <div className="settings-container">
            <div className="settings-box">
                <div className="settings-page">
                    <h3>Settings</h3>

                    
                    <div className="dashboard-button">
                    <Link to="/"><button className="button-2">Dashboard</button></Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Settings;