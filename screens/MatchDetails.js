import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import img from '../assets/welcome.jpg';
import Navigationbare from './navigationbare';
import { useSelector, useDispatch } from 'react-redux';
import { setMatches } from '../redux/matchReducer';
import axios from 'axios';

const MatchDetails = ({ navigation, route }) => {
    const data = route.params.data;
    const dispatch = useDispatch();
    


    const favoritmatches = useSelector((state) => state.favoritmatches.value);

    console.log(favoritmatches);
    

    const handleFavoriteMatches =async (data) => {
        console.log("this is the favorit data 0");
        console.log(data.id);
        const id = data.id
      
        const response = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/${id}?include=state;season;round;league;Participants`, { headers: { 'Authorization': "7YNOSKpNQzawdIhZYbCA0tYBwXIA3TQOa4qGiS1zTVU0lvHqlmC5G2XgPzhy" } });
              console.log("this is the favorit data");
              console.log(response.data.data);
           
              dispatch(setMatches(response.data.data))
              
      
      };
    

    return (
        <ImageBackground 
            source={img}
            resizeMode="cover" 
            style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <View style={styles.container}>
                {/* Adding the favorite icon at the top */}
                <FontAwesome onPress={()=>{handleFavoriteMatches(data)}} name="heart" size={24} color="red" style={styles.favoriteIcon} />
                <View style={styles.content}>
                    <View style={styles.participantsContainer}>
                        {data.participants.map((p, index) => (
                            <Image key={index} source={{ uri: p.image_path }} style={styles.participantImage} />
                        ))}
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>Match Details</Text>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Participants:</Text>
                            <Text style={styles.value}>{data.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>State:</Text>
                            <Text style={styles.value}>{data.state.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Season:</Text>
                            <Text style={styles.value}>{data.season.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Round:</Text>
                            <Text style={styles.value}>{data.round.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Result:</Text>
                            <Text style={styles.value}>{data.result_info}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Navigationbare navigation={navigation}></Navigationbare>
        </ImageBackground>
    );
};

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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    content: {
        width: '80%',
    },
    participantsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    participantImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 20, 
        left: 20, 
        zIndex: 1, 
    },
    detailsContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    value: {
        fontSize: 18,
        color: 'white',
    },
});

export default MatchDetails;
