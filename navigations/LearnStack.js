import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyProgram from '../screens/mainScreen/MyProgram';
import MyNote from '../screens/mainScreen/MyNote';
import MyCourse from '../screens/mainScreen/MyCourse';
import LearnDropdown from '../components/customButton/LearnDropdown'
import NoteForm from '../components/noteScreens/NoteForm';
import NoteDetail from '../components/noteScreens/NoteDetail';

const Stack = createStackNavigator();

export default function LearnStack() {
    return (
        <Stack.Navigator
            initialRouteName="MyCourse">
            <Stack.Screen
                name='MyCourse'
                component={MyCourse}
                options={({ navigation }) => ({
                    title: 'My Courses',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                    headerLeft: null, // Remove back arrow
                    headerRight: () => (
                        <LearnDropdown />
                    )
                })}
            />
            <Stack.Screen
                name='MyProgram'
                component={MyProgram}
                options={({ navigation }) => ({
                    title: 'My Program',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                    headerLeft: null, // Remove back arrow
                    headerRight: () => (
                        <LearnDropdown />
                    )
                })}
            />
            <Stack.Screen
                name='MyNote'
                component={MyNote}
                options={({ navigation }) => ({
                    title: 'My Note',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                    headerLeft: null,
                    headerRight: () => (
                        <LearnDropdown />
                    )
                })}
            />
            <Stack.Screen
                name='NoteForm'
                component={NoteForm}
                options={({ navigation }) => ({
                    title: 'Note Form',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                })}
            />
            <Stack.Screen
                name='NoteDetail'
                component={NoteDetail}
                options={({ navigation }) => ({
                    title: 'Note Detail',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                })}
            />
        </Stack.Navigator>
    );
}