import React, { createContext, useContext, useState, useEffect } from 'react';

import { firestore } from '../firebase';
import { collection, doc, setDoc, addDoc, getDocs, query, where, orderBy, serverTimestamp } from 'firebase/firestore';

import { useAuth } from './AuthContext';

const ExpensesContext = createContext();

export const useExpenses = () => {
  return useContext(ExpensesContext);
};

export const ExpensesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [listCategories, setListCategories] = useState([]);
  const [listExpenses, setListExpenses] = useState([]);
  const [listExpensesToApproval, setListExpensesToApproval] = useState([]);

  const { currentUser, currentUserDetails } = useAuth();

  const createExpense = async (category, description, amount) => {
    try {
      await addDoc(collection(firestore, 'expenses'), {
        category,
        description,
        amount: parseFloat(amount),
        user: currentUser.uid,
        userEmail: currentUser.email,
        userName: `${currentUserDetails.firstName} ${currentUserDetails.lastName}`,
        approved: false,
        approvedBy: '',
        timestamp: serverTimestamp()
      });

      setLoading(true);
    } catch (err) {
      return 'Failed to create an expense. Please try again.';
    };
  };

  const approveExpense = async (id) => {
    try {
      const expensesDoc = doc(firestore, `expenses/${id}`);

      await setDoc(expensesDoc, {approved: true}, {merge: true});

      setLoading(true);
    } catch (err) {
      console.error(err.message);
      return 'Failed to approve an expense. Please try again.';
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
        // setLoading(false);
      } catch (err) {
        console.error(err.message);
      };
    };

    const getExpensesToApproval = async () => {
      try {
        const q = query(collection(firestore, 'expenses'), where('approved', '==', false), orderBy('timestamp'));
        const querySnapshot = await getDocs(q);

        const expenses = [];

        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          const { user, userEmail, userName, category, description, amount } = doc.data();
          expenses.push({
            id: doc.id,
            user,
            userEmail,
            userName,
            category,
            description,
            amount
          });
        });

        setListExpensesToApproval(expenses);
        // setLoading(false);
      } catch (err) {
        console.error(err.message);
      };
    };

    getExpenses();
    getExpensesToApproval();
    setLoading(false);
  }, [loading, currentUser]);

  const value = {
    createExpense,
    approveExpense,
    listCategories,
    listExpenses,
    listExpensesToApproval
  };

  return (
    <ExpensesContext.Provider value={value}>
      {!loading && children}
    </ExpensesContext.Provider>
  );
};