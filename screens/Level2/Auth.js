import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import RegisterStudent from './RegisterStudent';
import RegisterCompany from './RegisterCompany';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStudent"
        component={RegisterStudent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterCompany"
        component={RegisterCompany}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
