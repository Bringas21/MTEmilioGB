import * as react from 'react';
import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 

import QuienesSomos from './components/QuienesSomos';
import Contactanos from './components/Contactanos';
import Mapa from './components/Mapa'

const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'QuienesSomos') {
              iconName = "ios-restaurant";
            } else if (route.name === 'Contactanos') {
              iconName = "ios-call";
            }else if (route.name === 'Mapa'){
              iconName = "ios-map";
            }
            return <Ionicons name={iconName} size={size} color="color" />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="QuienesSomos" component={QuienesSomos} />
        <Tab.Screen name="Contactanos" component={Contactanos} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}