import React, { Component, useState } from "react";
import { StyleSheet, Text } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const ClinicScreen = ({navigation, route}) => {
  return (
    <SafeAreaProvider style={styles.container}>
        <Text>{route.params.place}</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});

export default ClinicScreen;
