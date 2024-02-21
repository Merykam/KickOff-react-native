import React from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import img from '../assets/yep.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground 
      source={img}
      resizeMode="cover" 
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.logo}>KikOff</Text>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Matches')}>
          <Text style={styles.buttonText}>View Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlayersPress()}>
          <Text style={styles.buttonText}>View Players</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <StatusBar style="auto" />
  </View>
  );
}

const handleMatchesPress = () => {
    navigation.navigate('Matches')
  
};

const handlePlayersPress = () => {
  
};

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
