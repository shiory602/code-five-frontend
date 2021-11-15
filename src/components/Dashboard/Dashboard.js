import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="dashboard">
          <div className="box1">Expenses</div>
          <div className="box2">History</div>
          <div className="box3">New Transaction</div>          
      </div>

    </div>
  )
}

export default Dashboard;