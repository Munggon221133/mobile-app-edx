import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'
import Icons from 'react-native-vector-icons/Fontisto'

export default function Privacy() {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View>
                <Text style={styles.subText}>Privacy</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>Privacy Policy</Text>
                    <Icons
                        name="angle-right"
                        size={15}
                        color="#04242c"
                        style={styles.icon}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>Cookie Policy</Text>
                    <Icons
                        name="angle-right"
                        size={15}
                        color="#04242c"
                        style={styles.icon}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>Do Not Sell My Personal Information</Text>
                    <Icons
                        name="angle-right"
                        size={15}
                        color="#04242c"
                        style={styles.icon}
                    />
                </View>
            </View>
            <Divider style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginVertical: 13,
        borderWidth: 0.2,
        borderColor: 'gray',
    },
    text: {
        fontSize: 15,
        color: '#04242c',
        marginTop: 15,
        fontWeight: '700',
    },
    subText: {
        fontSize: 13,
        color: 'gray',
    },
    icon: {
        marginTop: 20,
        marginRight: 5,
    },
})