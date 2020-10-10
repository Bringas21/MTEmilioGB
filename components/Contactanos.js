import * as react from 'react';
import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 

export default class Contactanos extends Component{
constructor(props) {
   super(props);
   this.state = {
     telefono: '018002880888',
     emails:'tuopinion@starbucks.com.mx'
   };
 }
 
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'darkgreen'}}>
      <Text>{'\n\n\n\n\n'}</Text>
       <Text style={{color: 'goldenrod', fontSize: 40}}>Teléfono</Text>
       <Text style={{fontSize:40, color:'white'}}>01 800 288 08 88</Text>
       <Text style={{color: 'goldenrod', fontSize: 40}}>Correo</Text>
       <Text style={{fontSize:35, color: 'white'}}>tuopinion@starbucks.com.mx</Text>
 
        <Button 
          onPress={() => Communications.phonecall(this.state.telefono, true)} 
          title='Llamanos'/>
 
        <Button 
          onPress={() => Communications.email(this.state.emails.split(',') ,null,null,'Bienvenido a Starbucks','Escribe tu mensaje aqui')} title='Envianos un correo'/>
      </View>
    );
  }
}