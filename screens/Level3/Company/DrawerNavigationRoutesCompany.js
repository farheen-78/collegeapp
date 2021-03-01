import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SideBarMenu from './SideBarMenu';

import HomePage from './HomePage';
// import MyProfile from './MyProfile';
// import BloodDonationRequest from './BloodDonationRequest';
// import BloodDonationHistory from './BloodDonationHistory';
// import BloodCollectionRequest from './BloodCollectionRequest';
// import BloodCollectionHistory from './BloodCollectionHistory';

const Drawer = createDrawerNavigator();

export default function DrawerNavigationRoutesCompany() {
  const optionsObj = {
    headerShown: true,
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',

        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: 'white',
        },
        headerShown: true,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={SideBarMenu}>
      <Drawer.Screen
        name="HomePage"
        options={{
          drawerLabel: 'Home (Company)',
          ...optionsObj,

          headerStyle: {
            backgroundColor: 'rgb(0,128,255)',
          },
          headerTintColor: 'white',
        }}
        component={HomePage}
      />
    </Drawer.Navigator>
  );
}
