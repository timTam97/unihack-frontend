import { useNavigation } from '@react-navigation/core';
import React, { Component } from "react";
import { StyleSheet, Dimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';

export default class SearchClinicsScreen extends Component {
  constructor(props: any) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Search Clinics</Text>
          <SearchBar
            placeholder="Clinic name"
            lightTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            containerStyle={{
              backgroundColor: '#FFFFFF', borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0
            }}
            inputContainerStyle={{backgroundColor: '#DBDBDB'}}
            inputStyle={{backgroundColor: '#DBDBDB'}}
            leftIconContainerStyle={{backgroundColor: '#DBDBDB'}}
          />
          <SearchBar
            placeholder="Suburb or postcode"
            lightTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            containerStyle={{
              backgroundColor: '#FFFFFF', borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0
            }}
            inputContainerStyle={{backgroundColor: '#DBDBDB'}}
            inputStyle={{backgroundColor: '#DBDBDB'}}
            leftIconContainerStyle={{backgroundColor: '#DBDBDB'}}
          />
        </View>      
        <View style={styles.bottomContainer}>
          <TouchableRipple style={styles.boxes} rippleColor="#172285"
          onPress={() => movetoDateTime('South Yarra Clinic')}
          borderless={true}>
          <View>
            <Text style={styles.boxTitle}>South Yarra Clinic</Text>
            <Text style={styles.boxAddress}>12 Yarra Street, Melbourne VIC</Text>
            <Text>
              <Text style={styles.openClosed}>Open</Text>
              <Text style={styles.openClosedTime}>Closes at 10pm</Text>
            </Text>
          </View>
        </TouchableRipple>
        </View>
      </SafeAreaProvider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: '20%'
  },
  title: {
    paddingTop: '15%',
    paddingLeft: '5%',
    paddingBottom: '5%',
    fontSize: 28,
    fontWeight: 'bold',
  },
  boxes: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: Dimensions.get('window').width - (Dimensions.get('window').width/10),
    shadowColor: '#e0e0ec',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 5,
    borderRadius: 15,
    marginTop: 10,
    height: 100,
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  boxTitle: {
    fontFamily: 'Lato_900Black',
    color: '#101010',
    fontSize: 18,
    marginBottom: 10,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  boxAddress: {
    fontFamily: 'Lato_400Regular',
    color: '#101010',
    fontSize: 14,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  openClosed: {
    fontFamily: 'Lato_900Black',
    color: '#101010',
    fontSize: 14,
    flex: 1,
    // position: 'absolute',
    // left: '85%',
    // top: '50%',
    zIndex: 10, // works on ios
    elevation: 10, // works on android
    // transform: [
    //   {translateY: -1},
    // ],
  },
  openClosedTime: {
    fontFamily: 'Lato_900Black',
    color: '#101010',
    flex: 1,
    fontSize: 14,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#F1F1F4',
  }
});
