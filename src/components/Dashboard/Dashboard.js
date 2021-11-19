import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css";
import "../../scss-config/material-ui.scss"
import InputText from "../inputText";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="dashboard">

          <div className="box1">
            <div className="total">
              <h3>Expenses</h3>
              <h1>$980.00</h1>
            </div>
            <div className="status">
              <h4>Status:</h4>
              <h2>Wainting for Approval</h2>
            </div>
          </div>

          <div className="box2">
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

              <div className="buttonContainer">
                <button className="button" variant="contained">See more...</button>
              </div>

            </div>
          </div>
          <div className="box3">
            <form className="transaction">
              <h3>New Transaction</h3>
              <h4>Description:</h4>
                <InputText        
                placeholder="Description..."
                type="text"
                />
                <h4>Amount:</h4>
                <InputText
                placeholder="Amount..."
                type="number"
                />
                <h4>Image:</h4>
                <InputText
                placeholder="Image"
                type="image"
                />
            
              <div className="buttonContainer">
                <button className="button" variant="contained">Add new...</button>
              </div>
            </form>
          </div>          
      </div>

    </div>
  )
}

export default Dashboard;