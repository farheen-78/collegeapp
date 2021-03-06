import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {Grid, Row, Col, Button, Body, Input, Label} from 'native-base';
import Styles from '../../../Styles';

export default function HomePage() {
  return (
    <ScrollView>
      <View style={Styles.homeCard}>
        <Text
          style={{
            color: 'rgb(0,0,255)',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Students Page
        </Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 10,
            padding: 16,
          }}>
          Jobs for computer students
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 10,
            padding: 5,
          }}>
          
        </Text>
      </View>

      <View style={Styles.homeCard}>
        <Text
          style={{color: 'rgb(0,128,255)', fontSize: 18, fontWeight: 'bold'}}>
            Jobs Graduates can do in it
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
            // marginTop: 10,
            padding: 9,
          }}>
          Software developer | systems analyst | business analyst | IT support
          analyst | network ... Read our full-length software developer job
          description here
        </Text>
      </View>
    </ScrollView>
  );
}
