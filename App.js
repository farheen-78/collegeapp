import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './screens/Level1/SplashScreen';
import Auth from './screens/Level2/Auth';
import DrawerNavigationRoutesAdmin from './screens/Level3/Admin/DrawerNavigationRoutesAdmin';
import DrawerNavigationRoutesStudent from './screens/Level3/Student/DrawerNavigationRoutesStudent';
import DrawerNavigationRoutesCompany from './screens/Level3/Company/DrawerNavigationRoutesCompany';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutesAdmin"
          component={DrawerNavigationRoutesAdmin}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigationRoutesStudent"
          component={DrawerNavigationRoutesStudent}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigationRoutesCompany"
          component={DrawerNavigationRoutesCompany}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
