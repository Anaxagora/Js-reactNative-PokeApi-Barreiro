import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Para iniciar es con expo start
//https://reactnativepaper.com/
//https://reactnativeelements.com/
//https://nativebase.io/
//https://reactnative.dev/

const Drawer = createDrawerNavigator();
const HomeScreen = require('./Screens/HomeScreen');
const SearchScreen = require('./Screens/SearchScreen');

export default function App() {
  
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Pokedex" component={SearchScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


