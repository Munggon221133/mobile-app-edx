import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-paper'

export default function Help() {

    const onSignOutPressed = useNavigation();

    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.subText}>Help</Text>
                <Text style={styles.text}>Submit feedback</Text>
                <Text style={styles.subText}>Looking to make a Feature request or give us some feedback on our app?</Text>
                <CustomButton
                    text="Email the support team"
                    fgColor="#04242c"
                    bgColor="#f1f0ee"
                    fontWeight="bold"
                    fontSize={15}
                    borderWidth={1}
                    borderColor="#d3cfd2"
                    marginTop={10}
                />
                <Text style={[styles.text, { marginTop: 30 }]}>Get support</Text>
                <Text style={styles.subText}>To get more help and learn how to sue the edX mobile app, visit our frequently asked questions.</Text>
                <CustomButton
                    text="View FAQ"
                    fgColor="#04242c"
                    bgColor="#f1f0ee"
                    fontWeight="bold"
                    fontSize={15}
                    borderWidth={1}
                    borderColor="#d3cfd2"
                    marginTop={10}
                />
            </View>
            <Divider style={styles.divider} />
            <View style={{ paddingHorizontal: 20 }}>
                <CustomButton
                    text="Sign out"
                    fgColor="#04242c"
                    bgColor="#f1f0ee"
                    fontWeight="bold"
                    fontSize={15}
                    onPress={() => onSignOutPressed.navigate("FirstScreen")}
                    borderWidth={1}
                    borderColor="#d3cfd2"
                    marginTop={10}
                />
                <Text style={[styles.subText, {marginVertical: 15}]}>Version 5.1.0</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={{ paddingHorizontal: 20 }}>
                <CustomButton
                    text="Delete account"
                    fgColor="#d1342c"
                    bgColor="#f1f0ee"
                    fontWeight="bold"
                    fontSize={15}
                    borderWidth={1}
                    borderColor="#d1342c"
                    marginTop={20}
                />
                <Text style={[styles.subText, {marginBottom: 15}]}>Follow the instructions on the next screen to delete your account and all related data.</Text>
            </View>
        </ScrollView>
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
})