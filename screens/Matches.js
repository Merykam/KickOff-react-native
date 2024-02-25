import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import img from '../assets/yep.jpg';
import axios from 'axios';

export default function Matches({ navigation, route }) {
  const [matches, setAllMatches] = useState([]);

  useEffect(() => {
    const GetAllMatches = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=sport;participants;league', { headers: { 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });

        console.log(response.data.data);
        setAllMatches(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    GetAllMatches();
  }, [])

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => handleMatchPress(item, navigation)}>
    
    <View style={styles.matchItem}>
    <Text style={styles.vs}>Vs</Text>
      {item.participants.map((p, index) => (
        <View key={index} style={styles.matchTextContainer}>
          <ImageBackground src={p.image_path} style={styles.img}></ImageBackground>
          <Text style={styles.matchText1}>{p.name}</Text>
        </View>
        
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

const handleMatchPress = async(match, navigation) => {
  console.log(match.id);
  const id = match.id

        const response = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/${id}?include=state;season;round;league;Participants`, { headers: { 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
        
        console.log(response.data.data);
        navigation.navigate('MatchDetails', {data: response.data.data})
 

};

const styles = StyleSheet.create({
  img:{
    width:50,
    height:50,
    borderRadius:"50%"

  },
  
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
    display:"relative",
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    marginBottom: 18,
    borderRadius: 5,
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
   

  },
  matchTextContainer: {
    flexDirection:"column",
    flex:1,
    marginBottom: 5, 
    // justifyContent:"space-between",
    alignItems:"center"
    

  },
  matchText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: "bold",
    marginStart:8
  },
  vs: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    fontSize: 23,
    fontWeight: "bold",
    
  },
 
});
