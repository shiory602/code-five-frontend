import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Approval.css";
import {Link } from "react-router-dom";

const Approval = () => {
    return (
      <div>
        <Navbar />
        <div className="approval-container">
            <div className="approval-box">
                <div className="approval-page">
                    <h3>Approval</h3>

                    
                    <div className="approval-btn">
                    <Link to="/"><button className="button">DASHBOARD</button></Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Approval;