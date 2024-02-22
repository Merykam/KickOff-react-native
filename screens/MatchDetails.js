import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import img from '../assets/yep.jpg';
import axios from 'axios';

export default function MatchDetails({ navigation, route }) {
  const data = route.params.data;

  return (
    <View style={styles.container}>
         {/* <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.backgroundImage}> */}
      {/* <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.imageBackground}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ImageBackground> */}
       <View style={styles.containImages}>
      {data.participants.map((p)=>(
            
                <View> 
                <ImageBackground style={styles.imageBackground} src={p.image_path} ></ImageBackground>

              
            </View>
      ))}
        </View>
   
      <View style={styles.infoContainer}>
      <TouchableOpacity>
        <Text style={styles.title}>Match Details</Text>
        <Text style={styles.info}><Text style={styles.smallTitle}>Participants</Text>: {data.name}</Text>
        <Text style={styles.info}><Text style={styles.smallTitle}>State</Text>: {data.state.name}</Text>
        <Text style={styles.info}><Text style={styles.smallTitle}>Saison</Text>: {data.season.name}</Text>
        <Text style={styles.info}><Text style={styles.smallTitle}>Round</Text>: {data.round.name}</Text>
        <Text style={styles.info}><Text style={styles.smallTitle}>Result</Text>: {data.result_info}</Text>
        </TouchableOpacity>
      </View>
      

      {/* </ImageBackground> */}
    </View>


  );
}

const styles = StyleSheet.create({
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
},
containImages:{
    // flex: 1,
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",

  
},
smallTitle:{
    fontWeight:"bold"
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width:197,
    height:300,
    resizeMode:"cover",
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
 
    padding: 20,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    // flex: 1,
    // backgroundColor: "#0C0F4C",
    padding: 20,
    marginTop:20,
    // backgroundColor:"#0C0F4C"
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    marginBottom: 18,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    // color:"white",
 
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    // color:"white"
  },
});
