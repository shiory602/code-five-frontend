import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./History.css";
import "../../scss-config/material-ui.scss";

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
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 40</span>
                        </li>
                        <li>
                        <span className="name">Gas</span>
                        <span className="value">$ 80</span>
                        </li>
                        <li>
                        <span className="name">Lunch</span>
                        <span className="value">$ 60</span>
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 100</span>
                        </li>
                        <li>
                        <span className="name">Lunch</span>
                        <span className="value">$ 60</span>
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 40</span>
                        </li>
                        <li>
                        <span className="name">Gas</span>
                        <span className="value">$ 80</span>
                        </li>
                        <li>
                        <span className="name">Lunch</span>
                        <span className="value">$ 60</span>
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 100</span>
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 40</span>
                        </li>
                        <li>
                        <span className="name">Gas</span>
                        <span className="value">$ 80</span>
                        </li>
                        <li>
                        <span className="name">Lunch</span>
                        <span className="value">$ 60</span>
                        </li>
                        <li>
                        <span className="name">Taxi</span>
                        <span className="value">$ 100</span>
                        </li>
                    </ul>

                    <div className="buttonContainer">
                        <button className="button" variant="contained">Dashboard...</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}  

export default History;