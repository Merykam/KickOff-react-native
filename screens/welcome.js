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
     
        <View style={styles.overlay} />
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>WELCOME TO YOUR FOOTBALL APP</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Home')}} >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold"
  },
  welcomeContainer: {
    marginTop: 450,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#0B779F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 14,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
});
