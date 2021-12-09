import React, { createContext, useContext, useState, useEffect } from 'react';

import { firestore } from '../firebase';
import { collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } from 'firebase/firestore';

import { useAuth } from './AuthContext';

const ExpensesContext = createContext();

export const useExpenses = () => {
  return useContext(ExpensesContext);
};

export const ExpensesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [listCategories, setListCategories] = useState([]);
  const [listExpenses, setListExpenses] = useState([]);

  const { currentUser } = useAuth();

  const createExpense = async (category, description, amount, user) => {
    try {
      await addDoc(collection(firestore, 'expenses'), {
        category,
        description,
        amount: parseFloat(amount),
        user,
        approved: false,
        approvedBy: '',
        timestamp: serverTimestamp()
      });

      setLoading(true);
    } catch (err) {
      return 'Failed to create an expense. Please try again.';
    };
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const q = query(collection(firestore, 'categories'), orderBy('description'));
        const querySnapshot = await getDocs(q);

        const categories = [];

        querySnapshot.forEach((doc) => {
          const { id, description } = doc.data();
          categories.push({
            id,
            description
          });
        });

        setListCategories(categories);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      };
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const q = query(collection(firestore, 'expenses'), where('user', '==', currentUser.uid), orderBy('timestamp'));
        const querySnapshot = await getDocs(q);

        const expenses = [];

        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          const { category, description, amount } = doc.data();
          expenses.push({
            id: doc.id,
            category,
            description,
            amount
          });
        });

        setListExpenses(expenses);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      };
    };

    getExpenses();
  }, [loading, currentUser]);

  const value = {
    createExpense,
    listCategories,
    listExpenses
  };

  return (
    <ExpensesContext.Provider value={value}>
      {!loading && children}
    </ExpensesContext.Provider>
  );
};