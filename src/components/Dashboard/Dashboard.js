import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Expenses from '../Expenses/Expenses';

import { useExpenses } from '../../contexts/ExpensesContext';

import "./Dashboard.css";
import "../../scss-config/material-ui.scss";
import Footer from '../Footer/Footer';

const Dashboard = () => {

  const { listExpenses } = useExpenses();

  const totalExpenses = listExpenses.reduce((total, item) => {
    return total + (item.approved !== true ? item.amount : 0);
  }, 0);

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">
          <div className="dashboard-box1">
            <div className="total">
              <h3>Expenses</h3>
              <h1>$ {totalExpenses}</h1>
            </div>
            <div className="status">
              <h4>Status:</h4>
              <h2>Waiting for Approval</h2>
            </div>
          </div>

          <div className="dashboard-box2">
            <div className="history">
              <h3>History</h3>

              <ul>
                {listExpenses.length > 0 ? listExpenses.map((expense, idx) => {
                  return (
                    <li key={idx}>
                      <span className="category">{expense.category}</span>
                      <span className="name">{expense.description}</span>
                      <span className="value">$ {expense.amount}</span>
                    </li>
                  )
                }) : ''}
              </ul>

              <div className="dashboard-history-btn">
              <Link to="/history"><button className="button">SEE MORE</button></Link>
              </div>

            </div>
          </div>
          <div className="dashboard-box3">
            <Expenses />
          </div>          
          <div className="dashboard-box4">
            <form className="transaction">
              <h3>Expense Categories</h3>
              
            </form>
          </div> 
          <div className="dashboard-box5">
            <Footer></Footer>
          </div>              
      </div>

    </div>
  )
}

export default Dashboard;


/* Transport Tickets (Airplane, Train, Bus...)
Baggage fees
Rental cars
Fuel
Public transportation costs
Uber and ridesharing services
Hotel rooms and accommodations
Business meals, food and beverages
Convention expenses
Road tolls
Parking fees */