import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './../screen/AuthContext';
import AppNavigator from './AppNavigators';

import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const { state } = useContext(AuthContext); // Destructure the context value

  return (
    <NavigationContainer>
      {state.user ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;