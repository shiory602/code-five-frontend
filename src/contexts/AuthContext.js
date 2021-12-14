import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth, firestore } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const [updatedUser, setUpdatedUser] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [currentUserDetails, setCurrentUserDetails] = useState(curUserDetails);

  const createUser = async (email, password, firstName, lastName, admin) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (!user) return 'Failed to create an account. Please try again.';

      const userDoc = doc(firestore, `users/${user.user.uid}`);
      const docData =  {
        firstName,
        lastName,
        admin
      };

      // save data to the database
      await setDoc(userDoc, docData, {merge: true});

      return '';
    } catch (err) {
      return 'Failed to create an account. Please try again.';
    };
  };

  const updateUser = async (email, password, profileImage, firstName, lastName, admin) => {
    try {
      setUpdatedUser(false);
      await updateEmail(auth.currentUser, email);
      await updatePassword(auth.currentUser, password);

      if (profileImage !== '') {
        const storage = getStorage();
        const profileImageRef = ref(storage, `users/${auth.currentUser.uid}/${profileImage.name}`);

        await uploadBytes(profileImageRef, profileImage);

        if (profileImageRef.name !== '') {
          const imgURL = await getDownloadURL(profileImageRef);

          await updateProfile(auth.currentUser, {
            photoURL: imgURL
          });
        }
      }

      const userDoc = doc(firestore, `users/${auth.currentUser.uid}`);
      const docData =  {
        firstName,
        lastName,
        admin
      };

      // save data to the database
      await setDoc(userDoc, docData, {merge: true});

      setUpdatedUser(true);
      return 'User updated!';
    } catch (err) {
      let msg = '';

      console.error(err);

      switch(err.code) {
        case 'auth/requires-recent-login':
          msg = 'Failed to update the user. Please log in again.';
          break;

        case 'auth/weak-password':
          msg = 'Password should be at least 6 characters.';
          break;

          default:
          msg = 'Failed to update the user. Please try again.';
      }

      return msg;
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
        let admin = false;

        if (docSnap.exists()) {
          firstName = await docSnap.data().firstName;
          lastName = await docSnap.data().lastName;
          admin = await docSnap.data().admin;
        }

        curUserDetails = {
          firstName,
          lastName,
          admin
        };
      }
      else {
        curUserDetails = {
          firstName: '',
          lastName: '',
          admin: false
        };
      }
      
      await setCurrentUserDetails(curUserDetails);
    })();
  }, [currentUser, updatedUser]);

  const value = {
    currentUser,
    currentUserDetails,
    createUser,
    updateUser,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};