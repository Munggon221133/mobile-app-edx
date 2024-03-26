import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'
import CustomButton from '../customButton/CustomButton'
import React from 'react'

export default function VideoSettings() {
    return (
        <View>
            <Divider style={styles.divider} />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.subText}>Video settings</Text>
                <Text style={styles.text}>Wifi only download</Text>
                <Text style={styles.subText}>Only download content when wi-fi is turned on</Text>
                <Text style={styles.text}>Video download quality</Text>
                <Text style={styles.subText}>Auto (Recommended)</Text>
                <Text style={styles.text}>Delete all download videos</Text>
                <Text style={styles.subText}>Remove all download videos form your device.</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <CustomButton
                    text="Delete all videos"
                    fgColor="#04242c"
                    bgColor="#f1f0ee"
                    fontWeight="bold"
                    fontSize={15}
                    borderWidth={1}
                    borderColor="#d3cfd2"
                    marginTop={10}
                />
            </View>
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
})