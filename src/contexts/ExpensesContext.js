import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth, firestore } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

let curUserDetails = {
  firstName: '',
  lastName: ''
};

const ExpensesContext = createContext();

export const useExpenses = () => {
  return useContext(ExpensesContext);
};

export const ExpensesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (currentUser) {
        const { uid } = currentUser;
        const docRef = await doc(firestore, `users/${uid}`);
        const docSnap = await getDoc(docRef);
        let firstName = '';
        let lastName = '';

        if (docSnap.exists()) {
          firstName = await docSnap.data().firstName;
          lastName = await docSnap.data().lastName;
        }

        curUserDetails = {
          firstName,
          lastName
        };
      }
      else {
        curUserDetails = {
          firstName: '',
          lastName: ''
        };
      }
      
      await setCurrentUserDetails(curUserDetails);
    })();
  }, []);

  const value = {
    currentUser,
    currentUserDetails,
    createUser,
    loginUser,
    logoutUser
  };

  return (
    <ExpensesContext.Provider value={value}>
      {!loading && children}
    </ExpensesContext.Provider>
  );
};