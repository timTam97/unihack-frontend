import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerSectionStackStack}>
        <View style={styles.headerSectionStack}>
          <View style={styles.rect54}>
            <Text style={styles.virtualQueue}>Virtual Queue</Text>
            <Text style={styles.text74}>Thank you for waiting.</Text>
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
              We’ll let you know when we’re almost {'\n'}ready to see you.
            </Text>
          </View>
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
    fontFamily: 'Lato_700Bold',
    color: '#101010',
    fontSize: 45,
    marginTop: 30,
    marginLeft: -10,
  },
  text74: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
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
    color: 'rgba(161,164,178,1)',
    marginTop: 33,
    marginLeft: 37,
  },
  drKhanIsRunning: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
  },
  drKhanIsRunning1: {
    fontFamily: 'Lato_700Bold',
    color: 'rgba(102,129,255,1)',
    marginLeft: 5,
  },
  minutesLate: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginLeft: 4,
  },
  drKhanIsRunningRow: {
    height: 19,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 37,
    marginRight: 102,
  },
  text77: {
    fontFamily: 'Lato_400Regular',
    color: 'rgba(161,164,178,1)',
    marginTop: 12,
    marginLeft: 37,
  },
  virtualQueue1: {
    top: 288,
    left: 148,
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
});