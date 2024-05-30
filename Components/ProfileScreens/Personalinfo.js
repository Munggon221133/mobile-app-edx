import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'
import React from 'react'
import Icons from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

export default function Personalinfo() {
  
  const onPersonalInfoPressed = useNavigation();

  return (
    <View>
      <Divider style={styles.divider} />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.subText}>Personal information</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Email: Nutteebs02@gmail.com</Text>
          <Icons
            name="angle-right"
            size={15}
            color="#04242c"
            style={styles.icon}
            onPress={() => onPersonalInfoPressed.navigate("PersonalinfoScreen")}
          />
        </View>
        <Text style={[styles.text, { marginTop: -5 }]}>Username: munggon</Text>
      </View>
      <Divider style={styles.divider} />
    </View >
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
  icon: {
    marginTop: 25,
    marginRight: 5,
  },
})