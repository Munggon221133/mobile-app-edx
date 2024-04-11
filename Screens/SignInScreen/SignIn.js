import { StyleSheet, Text, View, Image, } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customButton/CustomInput'
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native'

export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = useNavigation();

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    };

    const onGooglePressed = () => {
        console.warn("onGooglePressed");
    };

    const onFacebookPressed = () => {
        console.warn("onFacebookPressed");
    };

    const onMicrosoftPressed = () => {
        console.warn("onMicrosoftPressed");
    };

    return (
        <View style={styles.root}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/edx_logo.png')}
                    resizeMode='contain'
                />
            </View>
            <CustomInput
                placeholder="Username or email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton
                text="Sign In"
                onPress={() => onSignInPressed.navigate("MainLearnScreen")}
                bgColor="#d1342c"
                fontWeight="bold"
            />
            <CustomButton
                text="Forgot password"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                fgColor="#04242c"
                fontSize={13}
            />
            <CustomButton
                text="Sign in with Google"
                onPress={onGooglePressed}
                fgColor="gray"
                bgColor="white"
                borderWidth={1}
                borderColor="gray"
                alignCenter={false}
                marginTop={40}
                iconSource={require('../../assets/google.png')}
                flexDirection="row"
            />
            <CustomButton
                text="Login with Facebook"
                onPress={onFacebookPressed}
                bgColor="#316FF6"
                iconType="facebook"
                iconColor="white"
                padding={10}
                flexDirection="row"
            />
            <CustomButton
                text="Sign in with Microsoft"
                onPress={onMicrosoftPressed}
                bgColor="black"
                alignCenter={false}
                iconSource={require('../../assets/microsoft.png')}
                flexDirection="row"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>By signing in to this app, you agree to the{' '}
                    <Text style={styles.link} >edX End User License Agreement</Text> and{' '}
                    <Text style={styles.link} >edX Terms of Service and Honor Code</Text> and you acknowledge that
                    edX and each Member process your personal data in accordance with the{' '}
                    <Text style={styles.link} >Privacy Policy.</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        marginTop: -20,
        alignItems: 'center'
    },
    logo: {
        height: 130,
        width: 130,
        marginBottom: 5,
        marginRight: 10,
    },
    textContainer: {
        marginTop: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#04242c'
    },
})