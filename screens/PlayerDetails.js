import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import img from '../assets/welcome.jpg';
import Navigationbare from './navigationbare'

const PlayerDetails = ({ navigation, route }) => {
    const player = route.params.data;
  
    return (
        <ImageBackground 
            source={img}
            resizeMode="cover" 
            style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.playerContainer}>
                        <Image source={{ uri: player.image_path }} style={styles.playerImage} />
                        <Text style={styles.playerName}>{player.display_name}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Common Name:</Text>
                            <Text style={styles.value}>{player.common_name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Date of Birth:</Text>
                            <Text style={styles.value}>{player.date_of_birth}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Country:</Text>
                            <Text style={styles.value}>{player.country.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Nationality:</Text>
                            <Text style={styles.value}>{player.nationality.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Height:</Text>
                            <Text style={styles.value}>{player.height} cm</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Weight:</Text>
                            <Text style={styles.value}>{player.weight} kg</Text>
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
    },
    content: {
        width: '80%',
    },
    playerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    playerImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    playerName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    detailsContainer: {
        width: '100%',
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
        fontSize: 20,
        color: 'white',
    },
});

export default PlayerDetails;
