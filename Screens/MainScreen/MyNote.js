import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import NoteStorage from '../../storages/NoteStorage';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function MyNote() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [notes, setNotes] = useState([]);

    const fetchNotes = useCallback(async () => {
        const items = await NoteStorage.readItems();
        setNotes(items);
    }, []);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes, isFocused]);

    const handleDeleteNote = async (id) => {
        await NoteStorage.removeItem(id);
        fetchNotes();
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('NoteDetail', { id: item.id })}
            style={styles.item}>
            <Text>{item.title}</Text>
            <Button title="Delete" color={'#d1342c'} onPress={() => handleDeleteNote(item.id)} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button title="Add Note" color={'#04242c'} onPress={() => navigation.navigate('NoteForm')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 15,
    },
});