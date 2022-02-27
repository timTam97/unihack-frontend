import React, { Component, useState } from "react";
import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Divider } from "react-native-elements";

const ClinicScreen = ({navigation, route}) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{paddingTop: '10%', marginBottom: -20, display: "flex", flexDirection: 'row'}}>
          <Image source={route.params.image} style={styles.image}></Image>
          <Text style={styles.title}>{route.params.title}</Text>
        </View>
        <Divider />
        <View>
          <Text style={styles.infoText}>{route.params.address}</Text>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View>
          <Text style={styles.infoText}>{route.params.phoneNumber}</Text>
        </View>
        <Divider style={{marginTop: 20}}/>
        <View>
          <Text style={styles.infoText}>Website: <Text style={{ textDecorationLine: 'underline', color: '#11CB7D'}}>{route.params.website}</Text></Text>
        </View>
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
    flex: 2,
    marginTop: 45,
    paddingLeft: '5%',
    // paddingBottom: '2%',
    fontSize: 24,
    fontWeight: 'bold',
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
  }
});

export default ClinicScreen;
