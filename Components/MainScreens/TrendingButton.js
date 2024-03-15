import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TrendingButton({
  onPress,
  text
}) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  button: {
    height: 20,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    paddingHorizontal: 8,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
})