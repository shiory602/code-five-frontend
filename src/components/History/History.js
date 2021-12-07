import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./History.css";
import "../../scss-config/material-ui.scss";
import {Link } from "react-router-dom";

const History = () => {
    return (
      <div>
        <Navbar />
        <div className="history-container">
            <div className="history-box">
                <div className="history-page">
                    <h3>Expenses History</h3>

                    <ul>
                        <li>
                            <span className="name">Lunch</span>
                            <span className="value">$ 60</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 40</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Gas</span>
                            <span className="value">$ 80</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Lunch</span>
                            <span className="value">$ 60</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 100</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Lunch</span>
                            <span className="value">$ 60</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 40</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Gas</span>
                            <span className="value">$ 80</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Lunch</span>
                            <span className="value">$ 60</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 100</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 40</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Gas</span>
                            <span className="value">$ 80</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Lunch</span>
                            <span className="value">$ 60</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                        <li>
                            <span className="name">Taxi</span>
                            <span className="value">$ 100</span>
                            <span><i class="fas fa-trash-alt"></i></span>
                        </li>
                    </ul>

                    <div className="history-btn">
                    <Link to="/"><button className="button">DASHBOARD</button></Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default History;