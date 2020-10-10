import * as react from 'react';
import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 

export default function QuienesSomos() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
    <Text>{'\n\n\n'}</Text>
      <Text style={{fontWeight: "bold", fontSize: 30, justifyContent:'center', color: 'white'}}>Quienes Somos</Text>
      <Image source = {{uri:'https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/382/2019/05/Storefront_Resized-1024x332.png'}}
      style = {{ width: 400, height: 200 }}/>
      <Text style={{fontSize: 16, color: 'white'}}>
      Más que café Nos apasiona nuestra labor de abastecedores de café, así como todo lo relacionado con el disfrute de una experiencia gratificante en una de nuestras tiendas. También ofrecemos una selección de tés de calidad superior, alta repostería y otras alternativas deliciosas para agradar al paladar. Sin olvidar que la música que se escucha en nuestras tiendas está elegida por su calidad artística y su atractivo</Text>
      <Image source = {{uri:'https://www.elfinanciero.com.mx/uploads/2020/03/05/f51238cd021583451962_standard_desktop_medium_retina.webp'}}
      style = {{ width: 400, height: 200 }}/>
    </View>
  );
}