import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen, 
  SplashScreen, 
  SignupScreen, 
  VerificationScreen,
  PersonalInfoScreen,
  RegisterDoneScreen,
  SecurityScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
     
   
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
     
    </Stack.Navigator>
  );
};
