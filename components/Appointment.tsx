import React from 'react';
import { Button, StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
const phonePhoto = require('../assets/images/phone.png')
const phoneStensilPhoto = require('../assets/images/phone_stensil.png')

type Props = {
    color: string,
    onClick1: any,
    onClick2: any,
    time: number,
    clinic: string,
    doctor: string
}
export function Appointment({color, onClick1, onClick2, time, clinic, doctor}: Props) {
    let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]
    let theTime = new Date(time)
    console.log({color, time, clinic, doctor})
    
    return (
        <TouchableOpacity style={buttonStyles.container} onPress={() => onClick1()}>
            <View style={{...buttonStyles.l, backgroundColor: color}}>
            <Text style={buttonStyles.l1}>{theTime.getDate()}</Text>
            <Text style={buttonStyles.l2}>{months[theTime.getMonth()]}</Text>
            </View>
            <View style={buttonStyles.c}>
            <Text style={buttonStyles.c1}>{clinic}</Text>
            <Text style={buttonStyles.c2}>{theTime.getHours()}:{theTime.getMinutes()} {theTime.getHours() >= 12 ? 'pm' : 'am'}</Text>
            <Text style={buttonStyles.c3}>{doctor}</Text>
            </View>
            <View style={buttonStyles.r}>
            <TouchableOpacity style={buttonStyles.r1}>
            <Image source={phoneStensilPhoto} style={{...buttonStyles.r2, backgroundColor: color}}/>
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
        )
    }
    
    const buttonStyles = StyleSheet.create({
        container: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#DFE0EB',
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 2 },
            shadowOpacity: 0.2,
            elevation: 5,
        },
        l: {
            aspectRatio: 1,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 5
        },
        l1: {
            fontFamily: 'Lato_400Regular',
            fontSize: 40,
            color: 'white'
        },
        l2: {
            fontFamily: 'Lato_400Regular',
            fontSize: 15,
            color: 'white'
        },
        c: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            marginLeft: 10,
            display: 'flex',
            justifyContent: 'center',
        },
        c1: {
            fontFamily: 'Lato_400Regular',
            // fontWeight: '600',
            fontSize: 14,
        },
        c2: {
            fontFamily: 'Lato_400Regular',
            fontSize: 14,
        },
        c3: {
            fontFamily: 'Lato_400Regular',
            fontSize: 14,
            color: '#8F8F8F'
        },
        r: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            justifyContent: 'flex-end'
        },
        r1: {
            aspectRatio: 1,
            backgroundColor: '#D0D0D0',
            borderRadius: 25,
            width: 50,
        },
        r2: {
            width: 40, 
            height: 40, 
            top: 5, 
            left: 5, 
            backgroundColor: 'blue',
            borderRadius: 10,
            borderWidth: 0
        }
    })