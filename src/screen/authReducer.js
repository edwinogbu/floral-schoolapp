// // authReducer.js
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'USER_LOADED':
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         loading: false,
//         error: null,
//       };
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         loading: false,
//         error: null,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//         loading: false,
//         error: null,
//       };
//     case 'AUTH_ERROR':
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

// // authReducer.js
// import React from 'react';

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   loading: true,
//   error: null,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'USER_LOADED':
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         loading: false,
//         error: null,
//       };
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         loading: false,
//         error: null,
//       };
//     case 'AUTH_ERROR':
//     case 'LOGOUT':
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;


const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignIn: true, // Set isSignIn to true
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignIn: true, // Set isSignIn to true
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        isSignIn: false, // Set isSignIn to false
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
   
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'UPDATE_LEADERBOARD_DATA':
      return {
        ...state,
        leaderboardData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
