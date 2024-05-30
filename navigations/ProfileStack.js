import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/mainScreen/ProfileScreen';
import PersonalinfoScreen from '../screens/mainScreen/PersonalinfoScreen';

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile">
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: 'Profile',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                    headerLeft: null,
                })}
            />
            <Stack.Screen
                name='PersonalinfoScreen'
                component={PersonalinfoScreen}
                options={({ navigation }) => ({
                    title: 'Personal Information',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                })}
            />
        </Stack.Navigator>
    );
}