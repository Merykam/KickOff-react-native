import React from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import img from '../assets/welcome.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground 
      source={img}
      resizeMode="cover" 
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Matches1')}>
          <Text style={styles.buttonText}>View Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Players')}>
          <Text style={styles.buttonText}>View Players</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <StatusBar style="auto" />
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  backgroundImage: {
    flex: 1,
     resizeMode: 'cover',
    
  },
  overlay: {
    justifyContent: 'center',
    alignItems:"center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0B779F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
    width:  300,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
});
