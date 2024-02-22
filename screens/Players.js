import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../redux/playerReducer';

export default function Players({ navigation }) {
  const [loading, setLoading] = useState(true);
  const players = useSelector((state) => state.player.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const GetAllPlayers = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/players?include=nationality;country;city;position', { headers: { 'Authorization': "Your_Authorization_Header" } });

        dispatch(setPlayer(response.data.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    GetAllPlayers();
  }, []);

  const renderPlayerItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.playerItem} onPress={() => handlePlayerPress(item)}>
        <Image source={{ uri: item.image_path }} style={styles.playerImage} />
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{item.display_name}</Text>
          {/* <Text style={styles.playerPosition}>{item.position.name}</Text> */}
          <Text style={styles.playerCountry}>{item.country.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlePlayerPress = (player) => {
    // Handle navigation to player details screen or any other action
    navigation.navigate('PlayerDetails', { player });
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
      <FlatList
        data={players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.playerList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
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
  },
  playerPosition: {
    fontSize: 16,
    color: '#555',
  },
  playerCountry: {
    fontSize: 14,
    color: '#777',
  },
});
