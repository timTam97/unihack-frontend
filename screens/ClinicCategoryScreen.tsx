import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BookStackPramList, HomeStackPramList } from '../types';
type Props = NativeStackScreenProps<BookStackPramList>
export default function ClinicCategoryScreen({ navigation }: Props) {
    // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ClinicCategoryScreen</Text>
      <Button title='AvailableClinics' onPress={() => {navigation.navigate('AvailableClinics', {category: 'Cardiology'})}} />
      <Button title='AppointmentTime' onPress={() => {navigation.navigate('AppointmentTime', {clinicId: 'a'})}} />
      <Button title='AppointmentConfirmation' onPress={() => {navigation.navigate('AppointmentConfirmation', {clinicId: 'a', timestamp: 1645852247})}} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
