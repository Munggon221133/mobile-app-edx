import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import NoteStorage from '../../storages/NoteStorage';
import { useNavigation } from '@react-navigation/native';

export default function NoteForm() {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const saveNote = async () => {
        const newNote = { id: '_' + Math.random().toString(36).substring(2, 9), title, note };
        await NoteStorage.writeItem(newNote);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <View style={styles.noteContainer}>
                <ScrollView>
                    <TextInput
                        style={styles.noteInput}
                        placeholder='Note here...'
                        multiline
                        value={note}
                        onChangeText={setNote}
                    />
                </ScrollView>
            </View>
            <Button title="Save" color={'#04242c'} onPress={saveNote} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 24,
        color: '#04242c',
        marginBottom: 20,
    },
    noteContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 18,
        height: '85%',
        marginBottom: 15,
    },
    noteInput: {
        padding: 10,
    },
});