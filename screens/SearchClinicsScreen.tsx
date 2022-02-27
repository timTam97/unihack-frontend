import React, { Component, useState } from "react";
import { StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';

const DATA: {id: number, title: string, address: string, image: NodeRequire, openingTime: string, closingTime: string}[] = [
  {
    id: 1,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 2,
    title: 'test',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/download.png'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 3,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 4,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 5,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 6,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 7,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
  {
    id: 8,
    title: 'Albert Road General Practice',
    address: '38 Albert Rd, South Melbourne VIC',
    image: require('../assets/images/albert-road-gp.jpg'),
    openingTime: '9:00am',
    closingTime: '10:00pm'
  },
];

const SearchClinicsScreen = ({navigation}) => {

  function selectClinic(title: string, address: string, image: NodeRequire, openingTime: string, closingTime: string) {    
    navigation.navigate('Clinic', {title: title, address: address, image: image, openingTime: openingTime, closingTime: closingTime});
  }

  const [search, setSearch] = useState("");

  const updateSearch = (search: any) => {
    setSearch(search);
  };

  const Item = ({ id, title, address, image, openingTime, closingTime  }) => (
    <TouchableRipple style={styles.boxes}
    onPress={() => selectClinic(title, address, image, openingTime, closingTime)}
    borderless={true}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image
            source={image}
            style={styles.boxImage}
          ></Image>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.boxTitle}>{title}</Text>
          <Text style={styles.boxAddress}>{address}</Text>
          <View style={{display: 'flex', flexDirection: 'row', paddingTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={styles.openClosed}>Open</Text>
            </View>
            <View style={{flex: 4}}>
              <Text style={styles.openClosedTime}>Closes at {openingTime}</Text>            
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
  

  const renderItem = ({ item }) => {
    return(
      <Item 
        title={item.title}
        address={item.address}
        image={item.image}
        openingTime={item.openingTime}
        closingTime={item.closingTime}
      />
    )
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Search Clinics</Text>
        <SearchBar
          placeholder="Clinic name"
          lightTheme
          round
          onChangeText={updateSearch}
          value={search}
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
          onChangeText={updateSearch}
          value={search}
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
        <FlatList
          data={DATA}
          renderItem={renderItem} 
        />
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  boxes: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: Dimensions.get('window').width - (Dimensions.get('window').width/8),
    shadowColor: '#e0e0ec',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 5,
    borderRadius: 15,
    marginTop: 10,
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  boxTitle: {
    fontFamily: 'Lato_700Bold',
    color: '#101010',
    fontSize: 16,
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
  boxImage: {
    width: 80,
    height: 80,
  },
  openClosed: {
    fontFamily: 'Lato_700Bold',
    color: '#08AF69',
    fontSize: 14,
    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  openClosedTime: {
    fontFamily: 'Lato_400Regular',
    color: '#101010',
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

export default SearchClinicsScreen;
