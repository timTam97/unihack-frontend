import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { HomeStackPramList } from '../types';
// import { RootTabScreenProps, NativeStackScreenProps } from '../types';
type Props = NativeStackScreenProps<HomeStackPramList>
export default function HomeScreen({ navigation }: Props) {
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Eddie</Text>
      <Text>how are you today</Text>
      <Button title='AppointmentDetails' onPress={() => {navigation.navigate('AppointmentDetails', {appointmentId: 'a'})}}></Button>
      <Button title='VirtualQueue' onPress={() => {navigation.navigate('VirtualQueue', {appointmentId: 'a'})}}></Button>
      <Text>Upcoming appointments</Text>
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
