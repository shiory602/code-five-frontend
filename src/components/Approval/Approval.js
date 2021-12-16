import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import "../../scss-config/material-ui.scss";
import "./Approval.css";

import { useExpenses } from '../../contexts/ExpensesContext';

const Approval = () => {

  const { listExpensesToApproval, approveExpense } = useExpenses();

  const handleApproveExpense = async (id) => {
    try {
      await approveExpense(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="approval-container">
        <div className="approval-box">
          <div className="approval-page">
            <h3>Approval</h3>

            <ul>
              {listExpensesToApproval.map(expense => (
                <li key={expense.id}>
                  <div className="approval-itens">
                    <span>{expense.userName}</span>
                    <span>{expense.category}</span>
                    <span>{expense.description}</span>
                    <span>$ {expense.amount}</span>
                    <a onClick={() => handleApproveExpense(expense.id)}><span><i className="fas fa-check-circle"></i></span></a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="approval-btn">
              <Link to="/"><button className="button">DASHBOARD</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};  

export default Approval;