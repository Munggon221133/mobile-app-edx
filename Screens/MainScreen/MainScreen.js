import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopMainScreen_S1 from '../../Components/MainScreens/TopMainScreen_S1'
import PopularScreens_S2 from '../../Components/MainScreens/PopularScreens_S2'

export default function MainScreen() {
  return (
    <View>
      <TopMainScreen_S1/>
      <PopularScreens_S2/>
    </View>
  )
}

const styles = StyleSheet.create({})