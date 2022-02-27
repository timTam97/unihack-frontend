import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeStackPramList } from '../types';
import { Appointment } from '../components/Appointment'
// import { RootTabScreenProps, NativeStackScreenProps } from '../types';
type Props = NativeStackScreenProps<HomeStackPramList>
const buttonPhoto = require('../assets/images/book_appointment_button.png')
const phonePhoto = require('../assets/images/phone.png')
const phoneStensilPhoto = require('../assets/images/phone_stensil.png')

export default function HomeScreen({ navigation }: Props) {
  const [appointments, setAppointments] = useState([]);
  const otherNavigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Hello, Eddie</Text>
        <Text style={styles.title_subtitle}>How are you today?</Text>
      </View>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => {otherNavigation.navigate('Root', {screen: 'BookStack', params: {screen: 'ClinicCategory'}})}} activeOpacity={0.8}>
        <Image style={styles.bookImage} source={buttonPhoto}/>
      </TouchableOpacity>
      <Button title='AppointmentDetails' onPress={() => {navigation.navigate('AppointmentDetails', {appointmentId: 'a'})}}></Button>
      <Button title='VirtualQueue' onPress={() => {navigation.navigate('VirtualQueue', {appointmentId: 'a'})}}></Button>
      <View style={styles.title_container}>
        <Text style={styles.secondtitle}>Upcoming appointments</Text>
      </View>

      <Appointment color='#A1ECBF'onClick1={() => {}} onClick2={() => {}}  time={1645925400} clinic={'Albert Road Mental clinic'} doctor={'Dr. Adbul Khan'}/>
    </SafeAreaView>
  );
}
const buttonStyles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#DFE0EB',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  l: {
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5
  },
  l1: {
    fontFamily: 'Lato_400Regular',
    fontSize: 40,
    color: 'white'
  },
  l2: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    color: 'white'
  },
  c: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  c1: {
    fontFamily: 'Lato_400Regular',
    // fontWeight: '600',
    fontSize: 14,
  },
  c2: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
  },
  c3: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: '#8F8F8F'
  },
  r: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'flex-end'
  },
  r1: {
    aspectRatio: 1,
    backgroundColor: '#D0D0D0',
    borderRadius: 25,
    width: 50,
  },
  r2: {
    width: 40, 
    height: 40, 
    top: 5, 
    left: 5, 
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 0
  }
})
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondtitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 22,
    color: '#696969'
  },
  title_container: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  bookImage: {
    height: undefined,
    aspectRatio: 1.5, 
    width: '80%',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Lato_700Bold',
  },
  title_subtitle: {
    color: '#A1A4B2',
    fontFamily: 'Lato_400Regular',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
