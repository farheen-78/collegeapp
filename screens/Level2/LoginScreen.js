import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Grid, Row, Col, Button, Input, Label} from 'native-base';
import Styles from '../../Styles';
import database from '@react-native-firebase/database';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('asim@gmail.com');
  const [password, setPassword] = useState('1234');

  const DoLogin = () => {
    let found = false;

    const users = database()
      .ref('/users')
      .once('value')
      .then((data) => data.val())
      .then((items) => {
        // console.log('Items====', items);
        Object.keys(items).map((item, ind) => {
          const userObj = items[item];
          // console.log('UserObj===', userObj);
          if (email === userObj.email && password === userObj.password) {
            found = true;

            //Alert.alert('Login Status', 'Login Success');

            // console.log(userObj.role);
            switch (userObj.role) {
              case 1: {
                navigation.replace('DrawerNavigationRoutesAdmin');
                break;
              }
              case 2: {
                navigation.replace('DrawerNavigationRoutesStudent');
                break;
              }
              case 3: {
                navigation.replace('DrawerNavigationRoutesCompany');
                break;
              }
            }
          }
        });

        if (!found) {
          Alert.alert(
            'Login Status',
            'Email or Password Invalid, please try again.',
          );
        }
      });
  };

  return (
    <ScrollView>
      <Grid style={{padding: 10}}>
        <Row>
          <Col>
            <View style={Styles.logo}>
              <Image
                source={require('../assets/books.png')}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  marginTop: 40,
                }}
              />
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text style={Styles.ltxt}>LOGIN</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <View style={Styles.BoxContainer}>
              <Label style={Styles.Label}>Username</Label>
              <Input
                style={Styles.InputBox}
                onChangeText={(e) => setEmail(e)}
                value={email}
              />

              <Label style={Styles.Label}>Password</Label>
              <Input
                secureTextEntry={true}
                style={Styles.InputBox}
                onChangeText={(e) => setPassword(e)}
                value={password}
              />

              <TouchableOpacity onPress={DoLogin}>
                <Text
                  style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.singleLine}>
              <Text style={{...Styles.bottomLtxt, ...Styles.blacktxt}}>
                New Student ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterStudent')}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Register Here
                </Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.singleLine}>
              <Text style={{...Styles.bottomLtxt, ...Styles.blacktxt}}>
                New Company ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterCompany')}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Register Here
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
}
