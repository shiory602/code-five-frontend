import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import "./History.scss";
import "../../scss-config/material-ui.scss";
import { useExpenses } from '../../contexts/ExpensesContext';

const History = () => {

  const { listExpenses, deleteExpense } = useExpenses();

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="history-container">
        <div className="history-box">
          <div className="history-page">
            <h3>Expenses History</h3>

            <ul>
              {listExpenses.length > 0 ? listExpenses.map((expense) => {
                return (
                  <li key={expense.id}>
                    <span className='name'>{expense.category}</span>
                    <span className='name'>{expense.description}</span>
                    <span className='value'>$ {expense.amount}</span>
                    <a onClick={() => handleDeleteExpense(expense.id)}><span><i className="fas fa-trash-alt"></i></span></a>
                  </li>
                )
              }) : ''}
            </ul>

            <div className="history-btn">
              <Link to="/"><button className="button">DASHBOARD</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}

export default History;