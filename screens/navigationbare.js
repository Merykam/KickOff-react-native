import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomNavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
        <MaterialCommunityIcons name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Matches1')} style={styles.iconContainer}>
        <MaterialCommunityIcons name="soccer" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Players')} style={styles.iconContainer}>
        <MaterialCommunityIcons name="account" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('favoris')} style={styles.iconContainer}>
        <MaterialCommunityIcons name="heart" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigationBar;
