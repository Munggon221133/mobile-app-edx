import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ContentButton from '../customContent/ContentButton';


export default function TopMainScreen_S1() {

    const [search, setSearch] = useState('');


    const onSearchPressed = () => {
        console.warn("onSearchPressed");
    };

    const onTreandPressed = () => {
        console.warn("onTreandPressed");
    };

    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <Text style={styles.TopTitle}>
                    Build skills. Earn a certificare.
                    Advance your career.
                </Text>
                <View style={styles.searchContainer}>
                    <View style={styles.searchInput}>
                        <TextInput
                            style={styles.input}
                            value={search}
                            onChangeText={setSearch}
                            placeholder={'What do you want to learn?'}
                        />
                    </View>
                    <View style={styles.searchButtonContainer}>
                        <TouchableOpacity
                            onPress={onSearchPressed}
                            style={styles.searchButton}
                        >
                            <Text style={styles.searchText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 10,}}>
                    <Text style={{ color: 'white' }}>
                        Trending:{' '}
                    </Text>
                    <ContentButton
                        text="Python"
                    />
                    <ContentButton
                        text="Excel"
                    />
                    <ContentButton
                        text="Data Science"
                    />
                    <ContentButton
                        text="Marketing"
                    />
                </View>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    root: {
    },
    topContainer: {
        backgroundColor: '#04242c',
        height: 395,
        width: '100%',
        marginTop: -20,
    },
    TopTitle: {
        marginLeft: 10,
        color: 'white',
        fontSize: 55,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    searchInput: {
        width: '75%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 45,
        marginRight: 7,
    },
    searchButtonContainer: {
        width: '25%',
    },
    searchButton: {
        backgroundColor: '#d1342c',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 7,
    },
    searchText: {
        color: 'white',
        fontWeight: 'bold',
        height: 20,
        fontSize: 15,
    },
    trendingContent: {
        marginTop: 10,

    }
})