import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
export default function AppointmentDetailScreen({route, navigation}) {
  const anavigation = useNavigation()
  console.log(route.params.appointmentId)
  const [pos, setPos] = useState(0);
  const [time, setTime] = useState(new Date(Date.now()));
  const otherNavigation = useNavigation()
  async function refreshPos() {
      // let user = 'Tim';
      console.log(route.params.appointmentId);
      let raw_results = await fetch("https://iasrapy4gj.execute-api.ap-southeast-2.amazonaws.com/getstatus", {
        "method": "GET",
        "headers": {
          "entryid": route.params.appointmentId
        }
      })
      let results = await raw_results.json();
      setTime(new Date(results.estimatedAppointmentTime * 1000));
      setPos(results.queuePosition);

  }
  // let atime = new Date(Date.now())
  useEffect(
    () => {
      setTimeout(() => {
        refreshPos()
      }, 1000)
    }
    // () => {refreshList().catch(() => 'a')}
    , []
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{formatAMPM(time)}</Text>
      <View style={styles.textHolder}>
        <Text style={styles.text}>You have 
        <Text style={styles.styledText}> {Math.floor((time.getTime() - Date.now()) / 60000)}</Text> minutes </Text>
        <Text style={styles.text}>until your appointment at</Text>
        <Text style={{...styles.text, ...styles.styledText}}>Albert Road General Practice</Text>
      </View>
        
        {/* You have 20 minutes until your appointment at Albert Road General Practice */}
      <View style={styles.map_container}>
        <MapView style={styles.map} />
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.text}>You have should leave in <Text style={styles.styledText}>
          {Math.floor((time.getTime() - Date.now() - (10 *60 * 1000)) / 60000)}</Text></Text>
        <Text style={styles.text}>minutes to arrive on time.</Text>
        <Text style={{fontSize: 10}}> </Text>
        {/* <Text style={{...styles.text, ...styles.styledText}}>Albert Road General Practice </Text> */}
        <Text style={styles.text}>You are currently <Text style={styles.styledText}>{pos}</Text> in the </Text>
        <Text style={styles.text}>waiting room.</Text>
      </View>
      <TouchableOpacity style={{width:'80%'}} onPress={() => {navigation.navigate('VirtualQueue', {appointmentId: route.params.appointmentId})}} activeOpacity={0.2}>
        <View style={styles.button}><Text style={{...styles.text, color: '#FFF', fontSize: 15}}>I HAVE ARRIVED</Text></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#11CB7D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHolder: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0)',
    marginVertical: 15
  },
  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
  },
  styledText: {
    color: '#11CB7D'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginTop: 50,
    fontSize: 60,
    fontFamily: 'Lato_700Bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map_container: {
    borderRadius: 15,
    // borderWidth: 1
  },
  map: {
    width: 300,
    height: 200,

  },
});
