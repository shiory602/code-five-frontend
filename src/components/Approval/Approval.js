import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Approval.css";

const Approval = () => {
    return (
      <div>
        <Navbar />
        <div className="approval-container">
            <div className="approval-box">
                <div className="approval-page">
                    <h3>Approval</h3>

                    
                    <div className="buttonContainer">
                        <button className="button" variant="contained">Dashboard...</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Approval;