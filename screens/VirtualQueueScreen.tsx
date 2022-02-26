import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet,View,StatusBar,Text, Image, Button, Alert, TouchableHighlight} from 'react-native';
import LoadingDots from 'react-native-loading-dots';

export default function Explore() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerSectionStackStack}>
        <View style={styles.headerSectionStack}>
          <View style={styles.rect54}>
          <View>
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/left-arrow.png')}
              resizeMode="contain"
              style={styles.image2}>
            </Image>
            </TouchableHighlight>
        </View>
            <Text style={styles.virtualQueue}>Virtual Queue</Text>
            <Text style={styles.text74}>Thank you for waiting.</Text>
            <View style={styles.loadingScreen}>
      <View style={styles.dotsWrapper}>
        <LoadingDots dots={3} size ={15} bounceHeight ={12} colors = {["#69db7c", "#69db7c",  "#69db7c", "#69db7c"]}/>
      </View>
    </View>
            <View style={styles.row}>
            </View>
            <Text style={styles.text75}>
              Here is your position in the queue.
            </Text>
            <View style={styles.drKhanIsRunningRow}>
              <Text style={styles.drKhanIsRunning}>Dr. Khan is running</Text>
              <Text style={styles.drKhanIsRunning1}>20</Text>
              <Text style={styles.minutesLate}>minutes late.</Text>
            </View>
            <Text style={styles.text77}>
              We’ll let you know when we’re {'\n'}almost ready to see you.
            </Text>
          </View>
        </View>
        <View style={styles.image}>
            <Image
              source={require('../assets/images/queuePosition.png')}
              resizeMode="contain"
              style={styles.image}>
            </Image>
            <Text style={styles.virtualQueue1}>5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  headerSection: {
    top: 22,
    left: 0,
    height: 60,
    position: 'absolute',
    right: 86,
  },
  rect54: {
    top: 0,
    left: 0,
    width: 500,
    height: 740,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
  },
  virtualQueue: {
    fontSize: 35,
    fontFamily: 'Lato_700Bold',
    color: '#101010',
    marginTop: 30,
    marginLeft: -10,
  },
  text74: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    fontSize: 20,
    marginTop: 5,
    marginLeft: -10,
  },
  row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 45,
    marginRight: 263,
  },
  text75: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(161,164,178,1)',
    marginTop: 300,
    marginLeft: 30,
  },
  drKhanIsRunning: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(161,164,178,1)',
  },
  drKhanIsRunning1: {
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
    color: '#11CB7D',
    marginLeft: 5,
  },
  minutesLate: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(161,164,178,1)',
    marginLeft: 4,
  },
  drKhanIsRunningRow: {
    height: 19,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 30,
    marginRight: 102,
  },
  text77: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(161,164,178,1)',
    marginTop: 12,
    marginLeft: 30,
  },
  virtualQueue1: {
    marginTop: 185,
    left: 125,
    position: 'absolute',
    fontFamily: 'Lato_700Bold',
    color: 'rgba(243,244,255,1)',
    fontSize: 100,
  },
  headerSectionStack: {
    top: 0,
    left: 0,
    height: 740,
    position: 'absolute',
    right: 0,
  },
  text72: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 7,
    marginLeft: 41,
  },
  text73: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginTop: 10,
    marginLeft: 41,
  },
  headerSectionStackStack: {
    height: 740,
    marginRight: -86,
    marginLeft: 36,
  },
  image: {
    width: 300,
    marginTop: 125,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  loadingScreen: {
    //flex: 1,
    display: "flex",
    //alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: -5
  },
  dotsWrapper: {
    width: 100
  },
  image2:{
    height: 40,
    marginTop: 55,
    marginLeft: -260
  }
});