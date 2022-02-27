import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Image, TouchableOpacity, Text, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeStackPramList } from '../types';
import { Appointment } from '../components/Appointment'
import * as Linking from "expo-linking"
import { BackgroundImage } from 'react-native-elements/dist/config';
// import { RootTabScreenProps, NativeStackScreenProps } from '../types';
type Props = NativeStackScreenProps<HomeStackPramList>
const buttonPhoto = require('../assets/images/book_appointment_button.png')
const phonePhoto = require('../assets/images/phone.png')
const phoneStensilPhoto = require('../assets/images/phone_stensil.png')

export default function HomeScreen({ navigation }: Props) {
  const [appointments, setAppointments] = useState([]);
  const [refresh, setRefreshing] = useState(false);
  const otherNavigation = useNavigation()
  async function refreshList() {
      let user = 'Tim';
      let raw_results = await fetch('https://iasrapy4gj.execute-api.ap-southeast-2.amazonaws.com/listpatients');
      let results = await raw_results.json();
      // console.log(results.filter((a) => a.patientName == user))
      setAppointments(results.filter((a) => a.patientName == user))
      setRefreshing(false)

  }
  useEffect(
    () => {refreshList().catch(() => 'a')}
    , []
  )
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
      {/* <Button title='AppointmentDetails' onPress={() => {navigation.navigate('AppointmentDetails', {appointmentId: 'a'})}}></Button>
      <Button title='VirtualQueue' onPress={() => {navigation.navigate('VirtualQueue', {appointmentId: 'a'})}}></Button> */}
      <View style={styles.title_container}>
        <Text style={styles.secondtitle}>Upcoming appointments</Text>
      </View>
      <FlatList data={appointments} 
        style={styles.list}
        renderItem={(a) => {
          // console.log('11111111111111');
          // console.log(a);
          return (
            <Appointment 
              color={['#11CB7D', '#476955', '#A1ECBF'][a.index % 3]}
              onClick1={() => {navigation.navigate('VirtualQueue', {appointmentId: a.item.entryId})}} 
              onClick2={() => {}}  
              time={a.item.timeCreated} 
              clinic={'Albert Road Mental clinic'} 
              doctor={'Dr. Adbul Khan'}/>
          )
        }
        }
        refreshing={refresh}
        onRefresh={() => {setRefreshing(false); refreshList().catch(() => 'a')}}
        keyExtractor={a => a.entryId}
      />
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    display: 'flex',
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
  list: {
    flex: 1,
    width: '90%',
    // height: 'auto',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
