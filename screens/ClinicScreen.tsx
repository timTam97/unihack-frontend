import React, { Component, useState } from "react";
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Divider } from "react-native-elements";
import { TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const ClinicScreen = ({navigation, route}) => {
  
  function selectDoctor(doctor: Object) {    
    console.log(doctor);
    navigation.navigate('Doctor', {doctor: doctor.data});
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{paddingTop: '10%', marginBottom: -20, display: "flex", flexDirection: 'row'}}>
          <Image source={route.params.image} style={styles.image}></Image>
          <Text style={styles.title}>{route.params.title}</Text>
        </View>
        <Divider />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.infoText}>{route.params.address}</Text>
          <View style={{marginTop: 15, flex: 1}}>
            <FontAwesomeIcon size={ 28 } color={ '#11CB7D' } icon={ faMapLocationDot } />
          </View>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.infoText}>{route.params.phoneNumber}</Text>
          <View style={{marginTop: 15, flex: 1}}>
            <FontAwesomeIcon size={ 28 } color={ '#11CB7D' } icon={ faPhone } />
          </View>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.infoText}>Website: <Text style={{ textDecorationLine: 'underline', color: '#11CB7D'}}>{route.params.website}</Text></Text>
        </View>
      </View>      
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>Practitioners</Text>
        {route.params.practitioners.map(function(data, index) {
          return (
            <TouchableRipple style={styles.boxes}
            onPress={() => selectDoctor({data})}
            borderless={true}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Image
                    key={data.id}
                    source={require('../assets/images/doctor-image.png')}
                    style={styles.boxImage}
                  ></Image>
                </View>
                <View style={{flex: 3}}>
                  <Text style={styles.boxTitle} key={data.id}>{data.name}</Text>
                  <Text><Text style={styles.boxText} key={data.id}>{data.role}</Text>, <Text style={styles.boxText} key={index}>{data.gender}</Text></Text>
                </View>
              </View>
            </TouchableRipple>
          )
        })}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    flex: 2,
    marginTop: 45,
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
  boxes: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: Dimensions.get('window').width - (Dimensions.get('window').width/8),
    shadowColor: '#e0e0ec',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 5,
    borderRadius: 15,
    marginTop: 10,
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
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
    // paddingTop: '55%',
    flex: 1,
    // aspectRatio: 1,
    resizeMode: "contain",
 },
  topContainer: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    height: 'auto'
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: '#F1F1F4',
    paddingLeft: 10,
    paddingRight: 10,
  },
  infoText: {
    paddingTop: '5%',
    fontSize: 16,
    flex: 8
  }
});

export default ClinicScreen;
