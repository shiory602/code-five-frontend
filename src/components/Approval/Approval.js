import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../scss-config/material-ui.scss";
import "./Approval.css";
import {Link } from "react-router-dom";
import avatar from "../avatar.png";

const Approval = () => {

    return (
      <div>
        <Navbar />
        <div className="approval-container">
            <div className="approval-box">
                <div className="approval-page">
                    <h3>Approval</h3>

                    <ul>
                        <li>                            
                            <div className="approval-itens">
                                <p className="approval-avatar">
                                    <img src={avatar} alt="Avatar" className="avatar"/>
                                    <h3>
                                        User 1<br />
                                        firstName lastName<br />
                                    </h3>
                                </p>
                                <p>
                                    <Link to="/approval"><button className="button">DETAILS</button></Link>
                                </p>    
                                <p>
                                    <button className="button">APPROVE</button>
                                </p>
                            </div>
                        </li>
                        <li>                            
                            <div className="approval-itens">
                                <p className="approval-avatar">
                                    <img src={avatar} alt="Avatar" className="avatar"/>
                                    <h3>
                                        User 2<br />
                                        firstName lastName<br />
                                    </h3>
                                </p>
                                <p>
                                    <Link to="/approval"><button className="button">DETAILS</button></Link>
                                </p>    
                                <p>
                                    <button className="button">APPROVE</button>
                                </p>
                            </div> 
                        </li>
                    </ul>
                    
                    <div className="approval-btn">
                    <Link to="/"><button className="button">DASHBOARD</button></Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default Approval;