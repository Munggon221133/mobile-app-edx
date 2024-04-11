import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../customButton/CustomButton'
import React from 'react'
import Icons from 'react-native-vector-icons/Fontisto'

export default function VideoSettings() {
  return (
    <View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={[styles.subText, { marginTop: 15 }]}>Video settings</Text>
        <Text style={styles.text}>Wifi only download</Text>
        <Text style={styles.subText}>Only download content when wi-fi is turned on</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Video download quality</Text>
          <Icons
            name="angle-right"
            size={15}
            color="#04242c"
            style={styles.icon}
          />
        </View>
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
    marginTop: 25,
    marginRight: 5,
  },
})