import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import NoteStorage from '../../storages/NoteStorage';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';

export default function NoteDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [note, setNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedNote, setEditedNote] = useState('');

  useEffect(() => {
    const fetchNoteDetail = async () => {
      const loadedNote = await NoteStorage.readItemDetail(id);
      setNote(loadedNote);
      setEditedTitle(loadedNote.title);
      setEditedNote(loadedNote.note);
    };
    fetchNoteDetail();
  }, [id]);

  const handleEditNote = async () => {
    const updatedNote = { id, title: editedTitle, note: editedNote };
    await NoteStorage.writeItem(updatedNote);
    setNote(updatedNote);
    setEditing(false);
  };

  if (!note) {
    return null;
  }

  navigation.setOptions({
    headerRight: () => (
      <Icons
        name="edit"
        size={24}
        style={{ marginRight: 20 }}
        onPress={() => setEditing(true)}
      />
    ),
  });

  return (
    <View style={styles.container}>
      {editing ? (
        <View>
          <TextInput
            style={styles.titleInput}
            value={editedTitle}
            onChangeText={setEditedTitle}
          />
          <View style={styles.noteContainer}>
            <ScrollView>
              <TextInput
                style={styles.noteInput}
                multiline
                value={editedNote}
                onChangeText={setEditedNote}
              />
            </ScrollView>
          </View>
          <Button title="Save" color={'#04242c'} onPress={handleEditNote} />
        </View>
      ) : (
        <View>
          <Text style={[styles.title, { color: '#04242c' }]}>{note.title}</Text>
          <Text style={{ color: '#04242c' }}>{note.note}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleInput: {
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#04242c',
    marginBottom: 10,
  },
  noteContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    height: '86%',
  },
  noteInput: {
    padding: 10,
    color: '#04242c',
  },
});