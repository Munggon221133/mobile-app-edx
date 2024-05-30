import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function CS50P() {
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const getLogo = async () => {
            try {
                const response = await fetch("http://192.168.137.1:8000/api/logo");
                const data = await response.json();
                if (data.length > 0) {
                    setLogo(data[0].image);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getLogo();
    }, []);

    return (
        <View style={styles.root}>
            {logo && <Image source={{ uri: logo }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
})