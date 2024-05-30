import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome6'

export default function PersonalinfoScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.iconContainer}>
          <Icons
            name="user-large"
            size={30}
            color="#04242c"
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={{fontSize: 18}}>munggon</Text>
        </View>
      </View>
      </View>
        <View style={[styles.contentContainer, {borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'white'}]}>
          <Text style={{fontSize: 18}}>Location:</Text>
        </View><View style={styles.contentContainer}>
          <Text style={{fontSize: 18}}>Spoken language:</Text>
        </View>
        <View style={[styles.contentContainer, {borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'white'}]}>
          <Text style={{fontSize: 18}}>About me:</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderBlockColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#ccc',
    height:45,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
})
