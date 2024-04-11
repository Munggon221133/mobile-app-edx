import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import VideoSettings from '../../components/profileScreens/VideoSettings'
import Personalinfo from '../../components/profileScreens/Personalinfo'
import Privacy from '../../components/profileScreens/Privacy'
import Help from '../../components/profileScreens/Help'

export default function ProfileScreen() {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
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
})