import * as react from 'react';
import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 

export default class Mapa extends React.Component{
 render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        region={{
            latitude: 19.419444,
            longitude: -99.145556,
            longitudeDelta: 35,
            latitudeDelta: 35,
          }} >
       
          <MapView.Marker
          coordinate={{
            latitude: 19.375856,
            longitude: -99.177887,
          }}
          title="Starbucks San Lorenzo"
        >
         </MapView.Marker>
         
              <MapView.Marker
          coordinate={{
            latitude: 19.379480,
            longitude: -99.161157,
          }}
          title="Starbucks P.de las Arboledas"
        >
        </MapView.Marker>

        <MapView.Marker
          coordinate={{
            latitude: 20.676589,
            longitude: -103.345033,
          }}
          title="Starbucks Jalisco"
        >
        </MapView.Marker>

        <MapView.Marker
          coordinate={{
            latitude: 18.955563,
            longitude:  -99.237033,
          }}
          title="Starbucks Cuernavaca"
        >
        </MapView.Marker>
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});