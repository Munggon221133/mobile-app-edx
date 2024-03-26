import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/mainScreen/MainScreen';
import MycourseScreen from '../screens/mainScreen/MycourseScreen';
import ProfileScreen from '../screens/mainScreen/ProfileScreen';
import Icons1 from 'react-native-vector-icons/Fontisto';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons3 from 'react-native-vector-icons/FontAwesome6';

import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/firstScreen/FirstScreen'
import SignUp from '../screens/signUpScreen/SignUp'
import SignIn from '../screens/signInScreen/SignIn'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='Mycourse'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#04242c',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarLabel: "Discover",
                    tabBarIcon: ({ color, size }) => (<Icons1 name="search" size={22} color={color} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Mycourse"
                component={MycourseScreen}
                options={{
                    tabBarLabel: "Learn",
                    tabBarIcon: ({ color, size }) => (<Icons2 name="book-open-variant" size={25} color={color} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (<Icons3 name="user-large" size={20} color={color} />),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}


function FirstNavStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='FirstScreen'
            >
                <Stack.Screen
                    name="MainScreen"
                    component={BottomTab}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Sign in',
                        headerTintColor: '#04242c',
                        headerTitleStyle: {
                            fontSize: 22,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default FirstNavStack;