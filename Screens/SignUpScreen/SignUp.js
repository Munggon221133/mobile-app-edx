import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CheckBox from 'react-native-check-box';
import CustomInput from '../../components/customButton/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const [SignUpname, setfname] = useState('');
    const [Publicname, setpname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const onCreateAccount = useNavigation();

    const onGooglePressed = () => {
        console.warn("onGooglePressed");
    };

    const onFacebookPressed = () => {
        console.warn("onFacebookPressed");
    };

    const onMicrosoftPressed = () => {
        console.warn("onMicrosoftPressed");
    };

    const onLinkOnePressed = () => {
        console.warn("onLinkOnePressed")
    };

    const onLinkTwoPressed = () => {
        console.warn("onLinkTwoPressed")
    };

    const onLinkThreePressed = () => {
        console.warn("onLinkThreePressed")
    };




    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('Country or Region of Residence');

    const toggleDropDown = () => {
        setOpenDropDown(!openDropDown);
    };

    const searchIconPressed = () => {
        console.warn("SearchIconPressed");
    };

    const loadCountry = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/country-names.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            // SET STATE
            setCountry(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadCountry();
    }, []);

    const filteredCountries = country.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.root}>
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

                <View>
                    <TouchableOpacity onPress={toggleDropDown} style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.text}>
                                <Text style={{ fontSize: 14, color: '#9f9f9f' }}>
                                    {selectedCountry}
                                </Text>
                            </View>
                            <View style={styles.icon}>
                                <Icons
                                    name={openDropDown ? "up" : "down"}
                                    size={15}
                                    color="black"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View>
                        {openDropDown &&
                            <View style={styles.listContainer}>
                                <CustomInput
                                    placeholder="Search Country or Region of Residence"
                                    value={search}
                                    iconName={'search'}
                                    iconColor={'#b6b6b6'}
                                    onIconPress={searchIconPressed}
                                    setValue={setSearch}
                                />
                                <FlatList
                                    data={filteredCountries}
                                    horizontal={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.countryList}
                                                onPress={() => {
                                                    setSearch(item.name);
                                                    setSelectedCountry(item.name);
                                                    setOpenDropDown(false);
                                                }}
                                            >
                                                <Text style={styles.countryText}>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                        }
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={checkbox}
                        onClick={() => setCheckbox(!checkbox)}
                    />
                    <Text style={styles.label}>I agree that edX may send me marketing messages.</Text>
                </View>
                <Text style={styles.text}>By creating an account, you agree to the{' '}
                    <Text style={styles.link} onPress={onLinkOnePressed}>edX End User License Agreement</Text> and{' '}
                    <Text style={styles.link} onPress={onLinkTwoPressed}>edX Terms of Service and Honor Code</Text> and you acknowledge that
                    edX and each Member process your personal data in accordance with the{' '}
                    <Text style={styles.link} onPress={onLinkThreePressed}>Privacy Policy.</Text>
                </Text>
                <CustomButton
                    text="Create an account"
                    onPress={() => onCreateAccount.navigate("SignIn")}
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
                    text="Login with Facebook"
                    onPress={onFacebookPressed}
                    bgColor="#316FF6"
                    iconType="facebook"
                    iconColor="white"
                    padding={10}
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 5,
    },
    link: {
        color: '#04242c'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 11,
    },


    container: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    text: {
        width: '90%',
        flex: 1,
        marginLeft: 10,
    },
    icon: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -15,
    },
    listContainer: {
        width: '100%',
        height: 435,
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        marginTop: 5,
    },
    countryList: {
        height: 40,
        justifyContent: 'center',
    },
    countryText: {
        fontSize: 15,
        color: 'gray',
    },
})