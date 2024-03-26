import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import VideoSettings from '../../components/ProfileScreens/VideoSettings'
import Personalinfo from '../../components/ProfileScreens/Personalinfo'
import Privacy from '../../components/ProfileScreens/Privacy'
import Help from '../../components/ProfileScreens/Help'

export default function ProfileScreen() {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Profile</Text>
          <VideoSettings />
          <Personalinfo />
          <Privacy />
          <Help />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#04242c',
    marginTop: 10,
    marginLeft: 15,
    fontWeight: '700',
  },
})