import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Auth/Login';
import OTPScreen from '../screens/OTPVerify';
import LoanScreen from '../screens/LoanApply';
import AadharScreen from '../screens/AadharVerify';
import UserDetailScreen from '../screens/UserDetail';
import BankDetailScreen from '../screens/BankDetail';
import DocumentBankScreen from '../screens/DocumentBank';
import ApplicationSubmit from '../screens/ApplicationSubmit';
import MainTabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
      <Stack.Screen 
          name="login"
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="OTPVerify"
          component={OTPScreen} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="LoanApply"
          component={LoanScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="AadharVerify"
          component={AadharScreen} 
          options={{ headerShown: false }} 
        />
<Stack.Screen 
          name="UserDetail"
          component={UserDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BankDetail"
          component={BankDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="DocumentBank"
          component={DocumentBankScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="ApplicationSubmit"
          component={ApplicationSubmit} 
          options={{ headerShown: false }} 
        />

         <Stack.Screen 
          name="TabNavigator"
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />



      </Stack.Navigator>

  );
};

export default AppNavigator;
