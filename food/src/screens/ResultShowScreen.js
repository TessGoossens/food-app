import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView  } from 'react-native';
import yelp from '../api/yelp';


const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title} >{result.name}</Text>
                <Text style={styles.Information} >{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text style={styles.Information} >Phone: {result.phone} </Text>
                <Text style={styles.Information} >Adress: {result.location.display_address} </Text>
            </View>
            
            <View style={styles.containerimages}>
            
            <FlatList 
            
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
            />
            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginVertical:4
        
    }, container: {
        flex: 1
    },
    containerimages: {
        alignItems: 'center',
        top: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 5
    },
    Information: {
        marginLeft: 15
    }
});

export default ResultShowScreen;