import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

export default function PopularScreens_S2() {
    const [popularCourse, setPopularCourse] = useState([]);

    // request API
    const loadPopularCourse = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Munggon221133/MobileAppProject/master/popularSubjects.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            setPopularCourse(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadPopularCourse();
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.searchContainer}>
                <Icons name="home" size={20} color="gray" style={{ marginLeft: 15, paddingVertical: 20 }} />
                <Text style={styles.searchText}>Search home</Text>
            </View>
            <Text style={styles.filterText}>Filter by popular subjects</Text>
            <FlatList
                horizontal
                data={popularCourse}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{ uri: item.uri }} />
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchText: {
        fontSize: 13,
        color: 'gray',
        marginLeft: 5,
    },
    filterText: {
        fontSize: 40,
        color: '#04242c',
        marginLeft: 15,
        fontWeight: '700',
    },
    itemContainer: {
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 20,
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 15,
    },
    titleContainer: {
        justifyContent: 'center',
        marginLeft: 15,
        flex: 1,
        width: 120,
    },
    title: {
        fontSize: 20,
        color: '#04242c',
        fontWeight: '700',
    },
});
