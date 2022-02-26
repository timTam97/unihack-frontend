import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { HomeStackPramList } from '../types';
// import { RootTabScreenProps, NativeStackScreenProps } from '../types';
type Props = NativeStackScreenProps<HomeStackPramList>
export default function HomeScreen({ navigation }: Props) {
  // const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Hello, Eddie</Text>
        <Text style={styles.title_subtitle}>How are you today?</Text>
      </View>
      
      <Button title='AppointmentDetails' onPress={() => {navigation.navigate('AppointmentDetails', {appointmentId: 'a'})}}></Button>
      <Button title='VirtualQueue' onPress={() => {navigation.navigate('VirtualQueue', {appointmentId: 'a'})}}></Button>
      <Text>Upcoming appointments</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // fontFamily: 'lato'
  },
  title_container: {
    marginTop: 10,
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    fontSize: 35,
    fontFamily: 'Lato_700Bold',
  },
  title_subtitle: {
    color: '#A1A4B2',
    fontFamily: 'Lato',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
