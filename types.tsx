/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  IntroModal: undefined;
  NotFound: undefined;
};

export type HomeStackPramList = {
  Home: undefined;
  AppointmentDetails: {appointmentId: string};
  VirtualQueue: {appointmentId: string};
}

export type BookStackPramList = {
  ClinicCategory: undefined;
  SearchClinics: {category: Categories};
  AppointmentTime: {clinicId: string};
  AppointmentConfirmation: {clinicId: string, timestamp: number}
}
export type Categories = 'GP' | 'XRAY' | 'OB' | 'Cardiology'

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeStack: HomeStackPramList;
  BookStack: BookStackPramList;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


