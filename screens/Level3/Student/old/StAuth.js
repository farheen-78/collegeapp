import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

export default function StAuth() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
