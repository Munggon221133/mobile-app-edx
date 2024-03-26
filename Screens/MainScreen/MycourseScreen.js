import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MycourseScreen() {
  return (
    <View>
      <Text style={styles.title}>My Course</Text>
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