import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './Screens/SignInScreen/SignIn';
import SignUpScreen from './Screens/SignUpScreen/SignUp';
import FirstScreen from './Screens/FirstScreen/FirstScreen';
import MainScreen from './Screens/MainScreen/MainScreen';
import SignUp from './Screens/SignUpScreen/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
