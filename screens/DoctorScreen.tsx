import React, { Component, useState } from "react";
import { StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Divider } from "react-native-elements";
import { TouchableRipple } from 'react-native-paper';

const DATES = [
    { date: 'Today'},
    { date: 'Tomorrow'},
    { date: 'Pick a date'},
];
const TIMES1 = [
    { time: '9:30'},
    { time: '10:00'},
    { time: '10:10'},
];
const TIMES2 = [
    { time: '11:20'},
    { time: '13:10'},
    { time: '13:30'},
]

const makeBooking = (text) => {
    console.log(text)
}

const DoctorScreen = ({navigation, route}) => {

    const dateViews = (data) => {
        return (
            <TouchableRipple 
                style={styles.boxes} 
                onPress={() => makeBooking('nice')}
            >
                <Text style={styles.date}>{data.date}</Text>
            </TouchableRipple>
        );
      };
    const timeViews = (data) => {
        return (
            <TouchableRipple 
                style={styles.boxes}
                onPress={() => makeBooking('nice')}
            >
                <Text style={styles.date}>{data.time}</Text>
            </TouchableRipple>
        );
    };
  
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{paddingTop: '10%', marginBottom: 10, display: "flex", flexDirection: 'row'}}>
          <Image source={require('../assets/images/doctor-image.png')} style={styles.image}></Image>
          <Text style={styles.title}>{route.params.doctor.name}</Text>
        </View>
        <Divider />
        <View>
          <Text style={styles.infoText}>{route.params.doctor.address}</Text>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View>
          <Text style={styles.infoText}>{route.params.doctor.phoneNumber}</Text>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View>
          <Text style={styles.infoText}>{route.params.doctor.bio}</Text>
        </View>
      </View>      
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>Book Appointment</Text>
        <Divider/>
        <Text style={styles.secondaryBottomTitle}>Date</Text>

        {/* <View style={styles.container}> */}
        <View style={{paddingBottom: 20, backgroundColor: '#F1F1F4', flexDirection: 'row', alignContent: 'center'}}>
            {DATES.map((value, index) => {
                return dateViews(value);
            })}
        </View>
        {/* </View> */}
        
        <Text style={styles.secondaryBottomTitle}>Open Slots</Text>
        <View style={{paddingBottom: 20, backgroundColor: '#F1F1F4', flexDirection: 'row', alignContent: 'center'}}>
            {TIMES1.map((value, index) => {
                return timeViews(value);
            })}
        </View>
        <View style={{paddingBottom: 20, backgroundColor: '#F1F1F4', flexDirection: 'row', alignContent: 'center'}}>
            {TIMES2.map((value, index) => {
                return timeViews(value);
            })}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    flex: 2,
    marginTop: 60,
    paddingLeft: '5%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomTitle: {
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 15
  },
  secondaryBottomTitle: {
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 15
  },
  dateGrid: {
    
  },
  date: {
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#101010'
  },
  boxes: {
    width: Dimensions.get('window').width / 3.5,
    shadowColor: '#e0e0ec',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 5,
    marginLeft: 10,
    borderRadius: 15,
    marginTop: 10,
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF'
  },
  boxTitle: {
    fontFamily: 'Lato_700Bold',
    color: '#101010',
    marginTop: 15,
    fontSize: 16,
    marginBottom: 10,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  boxText: {
    fontFamily: 'Lato_400Regular',
    color: '#101010',
    fontSize: 14,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  boxImage: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    marginTop: 30,
    width: 50,
    height: 100,
    resizeMode: "contain",
 },
  topContainer: {
    height: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20
  },
  bottomContainer: {
    backgroundColor: '#F1F1F4',
    paddingLeft: 10,
    paddingRight: 10,
  },
  infoText: {
    paddingTop: '5%',
    fontSize: 16,
  }
});

export default DoctorScreen;
