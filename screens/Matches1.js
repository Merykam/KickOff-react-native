import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity, FlatList, Image , SafeAreaView, ScrollView} from 'react-native';
import img from '../assets/football.jpg';
import img2 from '../assets/welcome.jpg';
import axios from 'axios';
import Navigationbare from './navigationbare'

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

  const handleMatchPress = async(match, navigation) => {
    console.log(match.id);
    const id = match.id
  
          const response = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/${id}?include=state;season;round;league;Participants`, { headers: { 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
          
          console.log(response.data.data);
          navigation.navigate('MatchDetails', {data: response.data.data})
   
  
  };
  
console.log(matches);
  return (
    
    <View style={styles.container}>
         <ImageBackground source={img2} 
        style={styles.img2}>

        </ImageBackground>
    
        <View style={styles.overlay}>
      
        
        <Text style={styles.leags}>All leags</Text>
    <View style={{flexDirection: 'row'}} >
    <Text style={styles.leagText1}>ALL</Text>
    <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
            <Text style={styles.leagText}>Serie1</Text>
        </ScrollView>

    </View>
         
        <ScrollView style={styles.Matches}>

      
       
        {matches.map((matche)=>(
            <View>
          
                <TouchableOpacity style={styles.matchContainer} onPress={() => handleMatchPress(matche, navigation)}>
                <Text style={styles.vs}>Vs</Text>

       
                    {matche.participants.map((p)=>(
                        <View> 
                            <View style={styles.column}>
                                
                            <ImageBackground src={p.image_path} style={styles.img}></ImageBackground>

                            <Text style={styles.infoText}>{p.name}</Text>

                            </View>
                        
                        </View>



                    ))}    
            
                </TouchableOpacity>
                </View>   
                  ))}
       
 
        </ScrollView>

        </View>

                    <Navigationbare navigation={navigation}></Navigationbare>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    leagText1:{
    
        padding:8,
        width:90,
        textAlign:"center",
        color:"white",
        marginTop:15,
        marginLeft:18,
        // backgroundColor:"#033B54",
        fontWeight:"bold",
        borderRadius:7,
        backgroundColor: "rgba(0, 0, 0, 0.4)"

    },
    column:{
        
        flexDirection:"column",
        alignItems:"center",
    },
    infoText:{
        color:"white",
        fontWeight:"bold",
        marginTop:8
    },
    
    matchContainer:{
        flexDirection:"row",
        alignItems:"center",
        display:"relative",
        padding:18,
        borderRadius:10,
        marginTop:23,
        justifyContent:"space-between",
        backgroundColor: 'rgba(0,0,0,0.5)', 
        
    },
    ALLleags:{
        flexDirection:"row",
    
      
    },
    leagText:{
        borderColor:"gray",
        borderWidth:1,
        padding:8,
        width:90,
        textAlign:"center",
        color:"white",
        marginTop:15,
        marginLeft:18

    },
    leags:{
        color:"white",
        marginTop:20,
        fontWeight:"bold",
        fontSize:24
    },
  img:{
    width:50,
    height:50,
    resizeMode:"cover",
    borderRadius:50
 

  },
  
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
  img2:{
    width:"100%",
    height:237,
    borderColor:"#033B54",
    // borderWidth:5,
    resizeMode:"cover"
    
  },
  container: {
    flex: 1,
    backgroundColor:"#033B54"
  },
  Matches:{
    flexDirection:"column",
   
  },
  overlay: {
    flex: 1,
    padding: 20,
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
