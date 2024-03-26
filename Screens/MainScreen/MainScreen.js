import { StyleSheet, View, ScrollView, } from 'react-native'
import React from 'react'
import TopMainScreen_S1 from '../../components/mainScreens/TopMainScreen_S1'
import PopularScreen_S2 from '../../components/mainScreens/PopularScreen_S2'
import ExploreScreen_S3 from '../../components/mainScreens/ExploreScreen_S3'
import ProgramScreen_S4 from '../../components/mainScreens/ProgramScreen_S4'
import BottomScreen_S5 from '../../components/mainScreens/BottomScreen_S5'


export default function MainScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <TopMainScreen_S1 />
        <PopularScreen_S2 />
        <ExploreScreen_S3 />
        <ProgramScreen_S4 />
        <BottomScreen_S5 />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})