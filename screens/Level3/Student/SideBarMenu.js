import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../../Styles';

export default function SideBarMenu({navigation}) {
  return (
    <View>
      <Text
        style={{...Styles.bottomLtxt, ...Styles.txtRed, ...Styles.menuItem}}
        onPress={() => navigation.navigate('HomePage')}>
        Home Page (Student)
      </Text>
      
      <Text
        style={{...Styles.bottomLtxt, ...Styles.txtRed, ...Styles.menuItem}}
        onPress={() => navigation.navigate('MyProfile')}>
        My Profile
      </Text>
      <Text
        style={{...Styles.bottomLtxt, ...Styles.txtRed, ...Styles.menuItem}}
        onPress={() => navigation.replace('Auth')}>
        Logout
      </Text>
    </View>
  );
}
