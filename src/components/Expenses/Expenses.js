import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputText from "../inputText";

import { useExpenses } from '../../contexts/ExpensesContext';

import './Expenses.css'

const Expenses = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const { createExpense, listCategories } = useExpenses();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      const msgError = await createExpense(category, description, amount);

      if (msgError !== '') setError(msgError);
    } catch (err) {
      setError('Failed to create an expense. Please try again.');
    }
  };

  return (
    <>
      {error !== '' ? error : '' }
      <form className="transaction" onSubmit={onSubmit}>
        <h3>New Transaction</h3>
        <h4>Category:</h4>
        <Select
          displayEmpty
          required
          onChange={e => setCategory(e.target.value)}
          value={category}
        >
          <MenuItem value="">-- Select --</MenuItem>
          {listCategories.length > 0 ? listCategories.map((expense) => {
            return (
              <MenuItem key={expense.id} value={expense.id}>{expense.description}</MenuItem>
            )
          }) : ''}
        </Select>
        <h4>Description:</h4>
        <InputText
          placeholder="Description..."
          type="text"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <h4>Amount:</h4>
        <InputText
          placeholder="Amount..."
          type="number"
          onChange={e => setAmount(e.target.value)}
          value={amount}
        />

        <div className="dashboard-add-btn">
          <button className="button">ADD NEW</button>
        </div>
      </form>
    </>
  )
}

export default Expenses;