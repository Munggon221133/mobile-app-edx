import { TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

export default function CustomInput({ value, setValue, placeholder, secureTextEntry, iconName, iconColor, onIconPress, style}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onIconPress}>
                <FontAwesome
                name={iconName}
                color={iconColor}
                resizeMode='contain'
                />
            </TouchableOpacity>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={[styles.input, style]}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        height: 40,
        marginLeft: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
    },
})