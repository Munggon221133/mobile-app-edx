import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function BottomScreen_S5() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.titleText}>Filter by popular schools and partners</Text>
            <Text style={styles.subTitleText}>Harvard University</Text>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={[styles.container, { marginLeft: 15 }]}>
                    <Text style={styles.text}>Data Analysis & Statistics</Text>
                </Pressable>
                <Pressable style={styles.container}>
                    <Text style={styles.text}>Humanities</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={[styles.container, { marginLeft: 15 }]}>
                    <Text style={styles.text}>Computer Science</Text>
                </Pressable>
                <Pressable style={styles.container}>
                    <Text style={styles.text}>Biology & Life Sciences</Text>
                </Pressable>
            </View>
            <Pressable style={[styles.container, { marginLeft: 15 }]}>
                <Text style={styles.text}>Art & Culture</Text>
            </Pressable>
            <Text style={styles.subTitleText}>Massachusetts Institute of Technology</Text>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={[styles.container, { marginLeft: 15 }]}>
                    <Text style={styles.text}>Business & Management</Text>
                </Pressable>
                <Pressable style={styles.container}>
                    <Text style={styles.text}>Engineering</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={[styles.container, { marginLeft: 15 }]}>
                    <Text style={styles.text}>Data Analysis & Statistics</Text>
                </Pressable>
                <Pressable style={styles.container}>
                    <Text style={styles.text}>Economics & Finance</Text>
                </Pressable>
            </View>
            <Pressable style={[styles.container, { marginLeft: 15 }]}>
                <Text style={styles.text}>Computer Science</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 35,
    },
    titleText: {
        fontSize: 39,
        color: '#04242c',
        marginTop: 30,
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
    container: {
        marginTop: 15,
        backgroundColor: '#d3cfd2',
        borderRadius: 10,
        width: '45%',
        height: 120,
        marginRight: 15,
        justifyContent: 'center',
    },
    text: {
        marginHorizontal: 25,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#464445',
    },


})