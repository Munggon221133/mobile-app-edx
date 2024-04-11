import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'

export default function LearnDropdown() {

    const [openDropDown, setOpenDropDown] = useState(false);
    const onMyCoursePressed = useNavigation();
    const onMyProgramPressed = useNavigation();
    const onMyNotePressed = useNavigation();

    const toggleDropDown = () => {
        setOpenDropDown(!openDropDown);
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={toggleDropDown} style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.icon}>
                            <Icons
                                name={openDropDown ? "angle-up" : "angle-down"}
                                size={15}
                                color="black"
                                style={{ marginRight: 280, marginTop: 3, }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                {openDropDown &&
                    <View style={styles.listContainer}>
                        <TouchableOpacity onPress={() => onMyCoursePressed.navigate("MyCourse")}>
                            <Text style={styles.text}>My courses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onMyProgramPressed.navigate("MyProgram")}>
                            <Text style={styles.text}>My program</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onMyNotePressed.navigate("MyNote")}>
                            <Text style={styles.text}>My note</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: -130,
        backgroundColor: 'white',
        padding: 10,
        elevation: 5,
        borderRadius: 5,
        width: 150,
        height: 90,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        color: '#04242c',
        paddingVertical: 5,
    },
})