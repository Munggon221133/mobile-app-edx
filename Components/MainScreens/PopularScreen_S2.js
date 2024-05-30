import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Entypo';

export default function PopularScreens_S2(props) {
    const [popularCourse, setPopularCourse] = useState([]);

    const loadPopularCourse = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/popular_course.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setPopularCourse(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadPopularCourse();
    }, []);

    return (
        <View style={[styles.root, props.style]}>
            <View style={styles.searchContainer}>
                <Icons name="home" size={20} color="gray" style={{ marginLeft: 15, paddingVertical: 20 }} />
                <Text style={styles.searchText}>Search home</Text>
            </View>
            <Text style={styles.titleText}>Filter by popular subjects</Text>
            <View style={styles.rootItemContainer}>
                <FlatList
                    horizontal={true}
                    data={popularCourse}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image style={styles.image} source={{ uri: item.uri }} />
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -5,
    },
    searchText: {
        fontSize: 13,
        color: 'gray',
        marginLeft: 5,
    },
    titleText: {
        fontSize: 39,
        color: '#04242c',
        marginHorizontal: 15,
        fontWeight: '700',
    },
    subTitleText: {
        fontSize: 25,
        color: '#04242c',
        marginLeft: 15,
        fontWeight: '700',
        marginTop: 15,
    },
    rootItemContainer: {
        marginHorizontal: 15,
    },
    itemContainer: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: -15,
        marginTop: 20,
        marginBottom: 50,
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
