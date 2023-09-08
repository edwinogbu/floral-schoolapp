import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer'; 
// ... (other imports)

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState); // Initialize useReducer

  // Add sign-in, sign-up, and sign-out functions using dispatch
  const signIn = (userData) => {
    dispatch({ type: 'SIGN_IN', payload: userData });
  };

  const signUp = (userData) => {
    dispatch({ type: 'SIGN_UP', payload: userData });
  };

  const signOut = () => {
    dispatch({ type: 'SIGN_OUT' });
  };

  return (
    <AuthContext.Provider value={{ state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
