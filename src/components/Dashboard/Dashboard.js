import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css";
import "../../scss-config/material-ui.scss";
import InputText from "../inputText";
import {Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="dashboard-container">

          <div className="dashboard-box1">
            <div className="total">
              <h3>Expenses</h3>
              <h1>$980.00</h1>
            </div>
            <div className="status">
              <h4>Status:</h4>
              <h2>Wainting for Approval</h2>
            </div>
          </div>

          <div className="dashboard-box2">
            <div className="history">
              <h3>History</h3>

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
              </ul>

              <div className="dashboard-history-btn">
              <Link to="/history"><button className="button">SEE MORE</button></Link>
              </div>

            </div>
          </div>
          <div className="dashboard-box3">
            <form className="transaction">
              <h3>New Transaction</h3>
              <h4>Description:
                <InputText        
                placeholder="Description..."
                type="text"
                /></h4>
                <h4>Amount:
                <InputText
                placeholder="Amount..."
                type="number"
                /></h4>
                <h4>
                <input
                placeholder="Image"
                type="file"
                /></h4>
            
              <div className="dashboard-add-btn">
              <button className="button">ADD NEW</button>
              </div>
            </form>
          </div>          
      </div>

    </div>
  )
}

export default Dashboard;