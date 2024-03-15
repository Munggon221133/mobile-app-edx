import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box';
import CustomInput from '../../Components/CustomButton/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';

export default function SignUp() {
    const [SignUpname, setfname] = useState('');
    const [Publicname, setpname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
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
            <Text style={styles.title}>Register</Text>
            <CustomInput
                placeholder="Full Name"
                value={SignUpname}
                setValue={setfname}
            />
            <CustomInput
                placeholder="Public Username"
                value={Publicname}
                setValue={setpname}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                    isChecked={checkbox}
                    onClick={() => setCheckbox(!checkbox)}
                />
                <Text style={styles.label}>I agree that edX may send me marketing messages.</Text>
            </View>

            <Text style={styles.text}>By creating an account, you agree to the{' '}
                <Text style={styles.link} >edX End User License Agreement</Text> and{' '}
                <Text style={styles.link} >edX Terms of Service and Honor Code</Text> and you acknowledge that
                edX and each Member process your personal data in accordance with the{' '}
                <Text style={styles.link} >Privacy Policy.</Text>
            </Text>
            <CustomButton
                text="Create an account"
                onPress={onRegisterPressed}
                bgColor='#d1342c'
                fontWeight="bold"
                fontSize={17}
                marginTop={20}
            />
            <CustomButton
                text="Continue with Google"
                onPress={onGooglePressed}
                fgColor="gray"
                bgColor="white"
                borderWidth={1}
                borderColor="gray"
                alignCenter={false}
                marginTop={50}
                iconSource={require('../../assets/google.png')}
                flexDirection="row"
            />
            <CustomButton
                text="Continue with Facebook"
                onPress={onFacebookPressed}
                bgColor="#316FF6"
                alignCenter={false}
                iconSource={require('../../assets/facebook.png')}
                flexDirection="row"
            />
            <CustomButton
                text="Continue with Microsoft"
                onPress={onMicrosoftPressed}
                bgColor="black"
                alignCenter={false}
                iconSource={require('../../assets/microsoft.png')}
                flexDirection="row"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#04242c'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 11,
    },
})
