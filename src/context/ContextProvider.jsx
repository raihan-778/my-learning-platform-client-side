import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //google signUP
  const googleSignUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //sign in with email and password
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with emial and password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user Logout
  const logOut = () => {
    return signOut(auth);
  };

  //observer to get user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, googleSignUp, userSignUp, userLogin, logOut };

  return (
    <div>
      <AuthContext.Provider value={authInfo}></AuthContext.Provider>
      <h2>This is Context Provider</h2>
      {children}
    </div>
  );
};

export default ContextProvider;
