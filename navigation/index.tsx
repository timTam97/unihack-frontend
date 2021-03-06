/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AppointmentConfirmationScreen from '../screens/AppointmentConfirmationScreen';
import AppointmentDetailScreen from '../screens/AppointmentDetailScreen';
import AppointmentTimeScreen from '../screens/AppointmentTimeScreen';
import SearchClinicsScreen from '../screens/SearchClinicsScreen';
import ClinicScreen from '../screens/ClinicScreen';
import ClinicCategoryScreen from '../screens/ClinicCategoryScreen';
import DoctorScreen from '../screens/DoctorScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import VirtualQueueScreen from '../screens/VirtualQueueScreen';
import { BookStackPramList, HomeStackPramList, RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const home_symbol = require('../assets/images/Home_symbol.png');
const book_symbol = require('../assets/images/Book_symbol.png');
const appointments_symbol = require('../assets/images/Appointments_symbol.png');
const user_symbol = require('../assets/images/User_symbol.png');
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="IntroModal" component={IntroScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeStackPramList>();

function HomeStackScreen() {
  return <HomeStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
    <HomeStack.Screen name='Home' component={HomeScreen} />
    <HomeStack.Screen name='AppointmentDetails' component={AppointmentDetailScreen} />
    <HomeStack.Screen name='VirtualQueue' component={VirtualQueueScreen} />
  </HomeStack.Navigator>
} 


const BookStack = createNativeStackNavigator<BookStackPramList>();

function BookStackScreen() {
  return <BookStack.Navigator initialRouteName='SearchClinics' screenOptions={{headerShown: false}}>
    <BookStack.Screen name='ClinicCategory' component={ClinicCategoryScreen} />
    <BookStack.Screen name='SearchClinics' component={SearchClinicsScreen} />
    <BookStack.Screen name='Clinic' component={ClinicScreen} />
    <BookStack.Screen name='Doctor' component={DoctorScreen} />
    <BookStack.Screen name='AppointmentTime' component={AppointmentTimeScreen} />
    <BookStack.Screen name='AppointmentConfirmation' component={AppointmentConfirmationScreen} />
  </BookStack.Navigator>
} 
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bttom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={({ navigation }: any) => ({
          title: 'Home',
          tabBarIcon: () => <Image source={home_symbol} style={{width:25, height: 25}} />,
        })}
      />
     <BottomTab.Screen
        name="a"
        component={BookStackScreen}
        options={{
          title: 'Appointments',
          tabBarIcon: () => <Image source={appointments_symbol} style={{width:30, height: 25}} />,
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="BookStack"
        component={BookStackScreen}
        options={{
          title: 'Book',
          tabBarIcon: () => <Image source={book_symbol} style={{width:30, height: 25}} />,
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
     <BottomTab.Screen
        name="c"
        component={BookStackScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => <Image source={user_symbol} style={{width:25, height: 25}} />,
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
// function Icon(props: {})




// Tabs:
//   1:
//     Screen1
//     Screen2


//   2:
//     Screen1
//     Screen2