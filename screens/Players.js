import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../redux/playerReducer';
import img from '../assets/welcome.jpg';
import Navigationbare from './navigationbare'

export default function Players({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const players = useSelector((state) => state.player.value);
  const dispatch = useDispatch();
  
  
  console.log(players);

  useEffect(() => {
    const GetAllPlayers = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/players?include=nationality;country;city', { headers:{ 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
        dispatch(setPlayer(response.data.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    GetAllPlayers();
  }, []);

  const filteredPlayers = players.filter(player =>
    player.display_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPlayerItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.playerItem} onPress={() => handlePlayerPress(item)}>
        <Image source={{ uri: item.image_path }} style={styles.playerImage} />
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{item.display_name}</Text>
          <Text style={styles.playerCountry}>{item.country.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlePlayerPress =async (player) => {
    console.log(player.id);
    const id = player.id
  
    const response = await axios.get(`https://api.sportmonks.com/v3/football/players/${id}?include=nationality;country;city`, { headers:{ 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
          
          console.log(response.data.data);
       
   
    navigation.navigate('PlayerDetails', {data: response.data.data});
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <ImageBackground 
        source={img}
        resizeMode="cover" 
        style={styles.backgroundImage}>
          <View style={styles.overlay} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        placeholderTextColor="white"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={searchQuery ? filteredPlayers : players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.playerList}
      />
      </ImageBackground>

      <Navigationbare navigation={navigation}></Navigationbare>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerList: {
    paddingBottom: 20,
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  playerDetails: {
    marginLeft: 20,
    
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white"
  },
  playerPosition: {
    fontSize: 16,
    color:"white"
  },
  playerCountry: {
    fontSize: 14,
    color:"white",
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color:"white",
    paddingHorizontal: 10,
    marginTop:19
  },
});
