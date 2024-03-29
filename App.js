import React from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import img from './assets/yep.jpg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './screens/Home'
import Matches1 from './screens/Matches1'
import MatchDetails from './screens/MatchDetails';
import Players from './screens/Players';
import store from './redux/store'
import { Provider } from 'react-redux'
import Welcome from './screens/welcome'
import PlayerDetails from './screens/PlayerDetails'
import Navigationbare from './screens/navigationbare'
import FavoriteMatchCard from './screens/favoris'

export default function App() {
  return (
    <Provider store={store}>
          <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      
      />
        <Stack.Screen
        name="Matches1"
        component={Matches1}
        options={{ headerShown: false }}
      
      />

    <Stack.Screen
        name="MatchDetails"
        component={MatchDetails}
      
      />

    <Stack.Screen
        name="Players"
        component={Players}  
      />

<Stack.Screen
        name="PlayerDetails"
        options={{ headerShown: false }}
        
        component={PlayerDetails}
      
      />

      
    <Stack.Screen
        name="navigationbare"
        component={Navigationbare}
      
      />

<Stack.Screen
        name="favoris"
        component={FavoriteMatchCard}  
      />
    </Stack.Navigator>

      

  </NavigationContainer>
  </Provider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)', 
    padding: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
