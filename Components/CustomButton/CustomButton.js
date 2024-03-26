import { StyleSheet, Text, Pressable, Image, View, } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'

export default function CustomButton({
    onPress,
    text,
    type = "PRIMARY",
    bgColor,
    fgColor,
    fontWeight,
    fontSize,
    borderColor,
    borderWidth,
    alignCenter = true,
    marginTop,
    flexDirection,
    padding,
    iconSource,
    iconType, // Added iconType prop
    iconColor
}) {

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
                borderWidth ? { borderWidth: borderWidth } : {},
                borderColor ? { borderColor: borderColor } : {},
                alignCenter ? { alignItems: 'center' } : {},
                marginTop ? { marginTop: marginTop } : {},
                flexDirection ? { flexDirection: flexDirection } : {},
                padding ? { padding: padding } : {},
            ]}>
            {iconSource && <Image source={iconSource} style={styles.icon} />}
            {iconType && (
                <Icons
                    name={iconType}
                    size={30}
                    color={iconColor}
                    style={styles.icons}
                />

            )}
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {},
                    fontWeight ? { fontWeight: fontWeight } : {},
                    fontSize ? { fontSize: fontSize } : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY: {
        height: 5,
        marginVertical: 5,
    },
    text: {
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',
        height: 20,
        fontSize: 13,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    icons: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
});