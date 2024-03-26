import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customButton/CustomInput'
import { useNavigation } from '@react-navigation/native'

export default function FirstScreen() {
  const [search, setSearch] = useState('');

  const onRegisterPressed = useNavigation();

  const onSignInPressed = useNavigation();

  const SearchIconPressed = () => {
    console.warn("SearchIconPressed");
  };

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor='#04242c' barStyle='light-content' />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/edx_logo.png')}
          resizeMode='contain'
        />
      </View>
      <Text style={styles.textTitle}>
        Courses and programs from the world's best universities in your pocket.
      </Text>
      <Text style={styles.textContent}>
        What do you want to learn?
      </Text>
      <View>
        <CustomInput
          placeholder="Search our 3000+ courses"
          value={search}
          setValue={setSearch}
          iconName={'search'}
          iconColor={'#b6b6b6'}
          onIconPress={SearchIconPressed}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.textLink}>Explore all courses</Text>
      </TouchableOpacity>
      <View style={styles.buttomContainer}>
        <View style={styles.registContainer}>
          <TouchableOpacity
            onPress={() => onRegisterPressed.navigate("SignUp")}
            style={styles.registButton}
          >
            <Text style={styles.registText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <TouchableOpacity
            onPress={() => onSignInPressed.navigate("SignIn")}
            style={styles.signInButton}
          >
            <Text style={styles.signText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
    marginTop: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: -10,
    alignItems: 'center'
  },
  logo: {
    height: 75,
    width: 75,
    marginBottom: 5,
    marginRight: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#04242c',
  },
  textContent: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#04242c',
  },
  textLink: {
    textDecorationLine: 'underline',
    color: '#04242c',
    fontSize: 15,
  },
  buttomContainer: {
    flexDirection: 'row',
    marginTop: 330,
  },
  registContainer: {
    width: '75%',
  },
  signInContainer: {
    width: '25%',
  },
  registButton: {
    backgroundColor: '#d1342c',
    marginRight: 7,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: 'white',
    marginLeft: 7,
    height: 45,
    borderWidth: 1.5,
    borderColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registText: {
    color: 'white',
    fontWeight: 'bold',
    height: 20,
    fontSize: 15,
  },
  signText: {
    color: '#d1342c',
    fontWeight: 'bold',
    height: 20,
    fontSize: 15,
  },
})