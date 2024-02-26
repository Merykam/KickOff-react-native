import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Navigationbare from './navigationbare';

const FavoriteMatchCard = ({ navigation }) => {
    const favoritmatches = useSelector((state) => state.favoritmatches.value);

    return (
        <View style={styles.container}>
            <View>
                {favoritmatches && favoritmatches.map((match) => (
                    <View style={styles.card} key={match.id}>
                        <View style={styles.header}>
                            <Text style={styles.matchName}>{match.name}</Text>
                            <Text style={styles.leagueName}>{match.league.name}</Text>
                        </View>
                        <View style={styles.participantsContainer}>
                            {match.participants.map((participant, index) => (
                                <Image key={index} source={{ uri: participant.image_path }} style={styles.participantImage} />
                            ))}
                        </View>
                        <Text style={styles.resultInfo}>{match.result_info}</Text>
                    </View>
                ))}
            </View>
            <Navigationbare navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    matchName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    leagueName: {
        fontSize: 16,
        color: 'gray',
    },
    participantsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    participantImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    resultInfo: {
        fontSize: 16,
    },
});

export default FavoriteMatchCard;
