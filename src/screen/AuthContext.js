// // AuthContext.js
// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import axios from 'axios'; // You need to install axios for API calls
// import authReducer from './authReducer';
// import { userApi } from './../services/api'; // Import the userApi object

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     isAuthenticated: false,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const res = await userApi.getUser(); // Use the userApi to fetch user data
//         dispatch({ type: 'USER_LOADED', payload: res.data });
//       } catch (err) {
//         dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       }
//     };

//     loadUser();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const res = await userApi.loginUser(email, password); // Use loginUser from userApi
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//     }
//   };

//   const logout = async () => {
//     try {
//       await userApi.logoutUser(); // Use logoutUser from userApi
//       dispatch({ type: 'LOGOUT' });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//     }
//   };

//   const registerUser = async (registrationRequest) => {
//     try {
//       const res = await userApi.registerUser(registrationRequest); // Use registerUser from userApi
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const verifyEmail = async (token) => {
//     try {
//       const res = await userApi.verifyEmail(token); // Use verifyEmail from userApi
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const viewUserProfile = async (userId) => {
//     try {
//       const res = await userApi.viewUserProfile(userId); // Use viewUserProfile from userApi
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const updateUserProfile = async (userId, updatedUser) => {
//     try {
//       const res = await userApi.updateUserProfile(userId, updatedUser); // Use updateUserProfile from userApi
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const deleteUser = async (userId) => {
//     try {
//       await userApi.deleteUser(userId); // Use deleteUser from userApi
//       dispatch({ type: 'LOGOUT' });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isAuthenticated: state.isAuthenticated,
//         loading: state.loading,
//         error: state.error,
//         login,
//         logout,
//         registerUser,
//         verifyEmail,
//         viewUserProfile,
//         updateUserProfile,
//         deleteUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


// // AuthContext.js
// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import axios from 'axios'; // You need to install axios for API calls
// import authReducer from './authReducer';
// import { userApi } from './../services/api'; // Import the userApi object

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     isAuthenticated: false,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const res = await userApi.getUser(); // Use the userApi to fetch user data
//         dispatch({ type: 'USER_LOADED', payload: res.data });
//       } catch (err) {
//         dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       }
//     };

//     loadUser();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const res = await userApi.loginUser(email, password); // Use loginUser from userApi
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//     }
//   };
//   const updateUserProfile = async (userId, updatedUser) => {
//     try {
//       const res = await userApi.updateUserProfile(userId, updatedUser); // Use updateUserProfile from userApi
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const deleteUser = async (userId) => {
//     try {
//       await userApi.deleteUser(userId); // Use deleteUser from userApi
//       dispatch({ type: 'LOGOUT' });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isAuthenticated: state.isAuthenticated,
//         loading: state.loading,
//         error: state.error,
//         login,
//         logout,
//         registerUser,
//         verifyEmail,
//         viewUserProfile,
//         updateUserProfile,
//         deleteUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// // AuthContext.js
// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import axios from 'axios'; // You need to install axios for API calls
// import authReducer from './authReducer';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     isAuthenticated: false,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const res = await axios.get('/api/user'); // Replace with your API endpoint for fetching user data
//         dispatch({ type: 'USER_LOADED', payload: res.data });
//       } catch (err) {
//         dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       }
//     };

//     loadUser();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const res = await axios.post('/api/login', { email, password }); // Replace with your API endpoint for login
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post('/api/logout'); // Replace with your API endpoint for logout
//       dispatch({ type: 'LOGOUT' });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//     }
//   };

//   const registerUser = async (registrationRequest) => {
//     try {
//       const res = await axios.post('/api/register/save', registrationRequest); // Replace with your API endpoint for registration
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const verifyEmail = async (token) => {
//     try {
//       const res = await axios.get(`/api/register/verifyEmail?token=${token}`); // Replace with your API endpoint for email verification
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const viewUserProfile = async (userId) => {
//     try {
//       const res = await axios.get(`/api/register/viewUserProfile/${userId}`); // Replace with your API endpoint for viewing user profiles
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const updateUserProfile = async (userId, updatedUser) => {
//     try {
//       const res = await axios.put(`/api/register/updateUserProfile/${userId}`, updatedUser); // Replace with your API endpoint for updating user profiles
//       return res.data;
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   const deleteUser = async (userId) => {
//     try {
//       await axios.delete(`/api/register/deleteUser/${userId}`); // Replace with your API endpoint for deleting users
//       dispatch({ type: 'LOGOUT' });
//     } catch (err) {
//       dispatch({ type: 'AUTH_ERROR', payload: err.response.data });
//       throw err.response.data;
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isAuthenticated: state.isAuthenticated,
//         loading: state.loading,
//         error: state.error,
//         login,
//         logout,
//         registerUser,
//         verifyEmail,
//         viewUserProfile,
//         updateUserProfile,
//         deleteUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



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
