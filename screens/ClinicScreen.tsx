import React, { Component, useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const ClinicScreen = ({navigation, route}) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.title}>{route.params.title}</Text>
      </View>      
      <View style={styles.bottomContainer}>
        {/* <FlatList
          data={DATA}
          renderItem={renderItem} 
        /> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    paddingTop: '18%',
    paddingLeft: '5%',
    paddingBottom: '2%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topContainer: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomContainer: {
    flex: 9,
    backgroundColor: '#F1F1F4',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default ClinicScreen;
