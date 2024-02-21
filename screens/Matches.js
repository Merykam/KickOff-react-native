import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import img from '../assets/yep.jpg';
import axios from 'axios';

export default function Matches({ navigation, route }) {
  const [matches, setAllMatches] = useState([]);

  useEffect(() => {
    const GetAllMatches = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=sport;participants', { headers: { 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
        console.log(response.data.data);
        setAllMatches(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    GetAllMatches();
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMatchPress(item)}>
      <View style={styles.matchItem}>
        {item.participants.map((p, index) => (
          <Text key={index} style={styles.matchText1}>{p.name}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>All Matches</Text>
          <FlatList
            data={matches}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const handleMatchPress = (match) => {
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  matchItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display:"flex",
    justifyContent:"space-between"
  },
  matchText1: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold"
  },
  matchText: {
  
   
  },
});
