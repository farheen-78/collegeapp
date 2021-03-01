import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {Grid, Row, Col, Button, Body, Input, Label} from 'native-base';
import Styles from '../../../Styles';

export default function HomePage() {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            color: 'rgb(0,0,255)',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 150,
          }}>
          Admin
        </Text>
      </View>
      <View style={Styles.homeCard}>
        <Text
          style={{
            color: 'rgb(0,0,255)',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Best Courses in Computer Science 2021 - Academic Courses
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 19,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 10,
            padding: 15,
          }}>
          Higher education is more than a college degree. ACADEMICCOURSES
          connects students with educators providing courses, preparatory years,
          short programs.
        </Text>
      </View>

      <View style={Styles.homeCard}>
        <Text
          style={{
            color: 'rgb(0,0,255)',
            fontSize: 20,
            paddingTop: 10,
            fontWeight: 'bold',
          }}>
          Best Courses in Information Technology
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
          Related fields of study. Big Data (5) arrow_forward. Cloud Computing
          (10) arrow_forward. Computer Security (6) arrow_forward. Cybersecurity
          (12) arrow_forward. ICT (4) arrow_forward. Information Technology
          Management (1) arrow_forward. IT Security (6) arrow_forward. Networks
          (13) arrow_forward.
        </Text>
      </View>
    </ScrollView>
  );
}
