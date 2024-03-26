import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, } from 'react-native';
import CustomBox from '../customContent/CustomBox';

export default function ExploreScreen_3(props) {
    const [mostCourse, setMostCourse] = useState([]);
    const [executive, setExecutive] = useState([]);

    const loadMostCourse = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/most_popular.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setMostCourse(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadMostCourse();
    }, []);

    const loadExecutive = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/executive.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setExecutive(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadExecutive();
    }, []);

    return (
        <View>
            <Text style={styles.titleText}>Explore courses and programs</Text>
            <Text style={styles.subTitleText}>Most popular</Text>
            <View style={{ marginLeft: 15 }}>
                <FlatList
                    horizontal={true}
                    data={mostCourse}
                    renderItem={({ item }) => (
                        <CustomBox
                            imageSource={{ uri: item.uri }}
                            text={item.title}
                            subtext={item.subtitle}
                            CourseType="typeC"
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <Text style={styles.subTitleText}>Executive Education</Text>
            <View style={{ marginLeft: 15 }}>
                <FlatList
                    horizontal={true}
                    data={executive}
                    renderItem={({ item }) => (
                        <CustomBox
                            imageSource={{ uri: item.uri }}
                            text={item.title}
                            subtext={item.subtitle}
                            CourseType="typeE"
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <Text style={styles.subTitleText}>Master's Degrees</Text>
            <View style={{ marginLeft: 15 }}>
                <FlatList
                    horizontal={true}
                    data={mostCourse}
                    renderItem={({ item }) => (
                        <CustomBox
                            imageSource={{ uri: item.uri }}
                            text={item.title}
                            subtext="Harvard University"
                            CourseType="typeM"
                            bgColor="#04242c"
                            fgColor="white"
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <Text style={styles.subTitleText}>Bachelor's Degrees</Text>
            <View style={{ marginLeft: 15 }}>
                <FlatList
                    horizontal={true}
                    data={mostCourse}
                    renderItem={({ item }) => (
                        <CustomBox
                            imageSource={{ uri: item.uri }}
                            text={item.title}
                            subtext="Harvard University"
                            CourseType="typeM"
                            bgColor="#04242c"
                            fgColor="white"
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    mostContainer: {
        marginLeft: 15,
        marginTop: 15,
    },
    mostImage: {
        width: Dimensions.get("screen").width / 1.5,
        height: 180,
        borderRadius: 10,
    },
    mostTitleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    mostTitle: {
        marginTop: 50,
        fontSize: 22,
        fontWeight: 'bold'
    },
});
