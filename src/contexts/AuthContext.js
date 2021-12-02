import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth, firestore } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

let curUserDetails = {
  firstName: '',
  lastName: ''
};

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [currentUserDetails, setCurrentUserDetails] = useState(curUserDetails);

  const createUser = async (email, password, firstName, lastName) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (!user) return 'Failed to create an account. Please try again.';

      const userDoc = doc(firestore, `users/${user.user.uid}`);
      const docData =  {
        firstName,
        lastName
      };

      // save data to the database
      await setDoc(userDoc, docData, {merge: true});

      return '';
    } catch (err) {
      return 'Failed to create an account. Please try again.';
    };
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

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
  }, [currentUser]);

  const value = {
    currentUser,
    currentUserDetails,
    createUser,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};