import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Expenses from '../Expenses/Expenses';
import money from "../money.png";

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

              {listExpenses.length > 0
                ? (
                    <>
                      <ul>
                        {listExpenses.map((expense, idx) => {
                          return (
                            <li key={idx}>
                              <span className="category">{expense.category}</span>
                              <span className="name">{expense.description}</span>
                              <span className="value">$ {expense.amount}</span>
                            </li>
                          )
                        })}
                      </ul>

                      <div className="dashboard-history-btn">
                        <Link to="/history"><button className="button">SEE MORE</button></Link>
                      </div>
                    </>
                  )
                : <h4>You do not have any transaction</h4>
              }
            </div>
          </div>
          <div className="dashboard-box3">
            <Expenses />
          </div>          
          <div className="dashboard-box4">
            <form className="transaction">
              <h3>The best way to manage your expenses!!</h3>
              <img src={money} alt="Money" className="money-img" />
            </form>
          </div> 
          <div className="dashboard-box5">
            <Footer />
          </div>              
      </div>

    </div>
  )
}

export default Dashboard;