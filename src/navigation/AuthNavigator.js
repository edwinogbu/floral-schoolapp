import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './../screen/SignInScreen';
import SignUpScreen from './../screen/SignUpScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="SignInScreen" component={SignInScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
      <Stack.Screen
        name="SignUpScreen"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />

    </Stack.Navigator>
  );
};

export default AuthNavigator;

