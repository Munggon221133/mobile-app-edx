import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomBox({
    onPress,
    bgColor,
    fgColor,
    imageSource,
    text,
    subtext,
    CourseType,
}) {
    let courseText, courseStyle, courseTextStyle;
    switch (CourseType) {
        case 'typeC':
            courseText = 'Course';
            courseStyle = styles.courseContainerC;
            break;
        case 'typeE':
            courseText = 'Executive Education';
            courseStyle = styles.courseContainerE;
            break;
        case 'typeM':
            courseText = "Master's Degree";
            courseStyle = styles.courseContainerM;
            courseTextStyle = { color: 'white' };
            break;
        case 'typeB':
            courseText = "Bachelor's Degree";
            courseStyle = styles.courseContainerB;
            courseTextStyle = { color: 'white' };
            break;
    }
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <View>
                <Image
                    source={imageSource}
                    style={styles.image}
                />
            </View>
            <View style={[
                styles.textContainer,
                bgColor ? { backgroundColor: bgColor } : {},
            ]}>
                <View>
                    <Text
                        style={[
                            styles.text,
                            fgColor ? { color: fgColor } : {},
                        ]}>
                        {text}
                    </Text>
                    <Text
                        style={[
                            styles.subtext,
                            fgColor ? { color: fgColor } : {},
                        ]}>
                        {subtext}
                    </Text>
                </View>
                <View style={courseStyle}>
                    <Text style={[styles.courseText, courseTextStyle]}>
                        {courseText}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    container: {
        marginLeft: 5,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 20,
        height: 350,
        elevation: 5,
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        buttom: 0,
        right: 0,
        left: 0,
        height: 220,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginTop: 130,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#04242c'
    },
    subtext: {
        marginTop: 10,
        color: 'gray',
    },
    courseContainerC: {
        position: 'absolute',
        top: 170,
        left: 20,
        height: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        width: '23%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    courseContainerE: {
        position: 'absolute',
        top: 170,
        left: 20,
        height: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        width: '53%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    courseContainerM: {
        position: 'absolute',
        top: 170,
        left: 20,
        height: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        width: '43%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    courseContainerB: {
        position: 'absolute',
        top: 170,
        left: 20,
        height: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        width: '47%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    courseText: {
        fontSize: 13,
    },
})