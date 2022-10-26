import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const { user, setUser } = useState();

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubSignUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const googleSignUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("on state change", currentUser);

      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, userLogin, githubSignUp, googleSignUp, userSignUp };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
