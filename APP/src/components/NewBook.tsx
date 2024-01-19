import React from 'react';
import {useState} from 'react';
import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import createNewBook from '../logic/createNewBook';
import {styles} from '../styles';
import Loader from './Loader.tsx';

interface NewBookProps {
  onNewBookCreated: () => void;
  onCancel: () => void;
}

const NewBook = ({onNewBookCreated, onCancel}: NewBookProps) => {
  const [bookName, setBookName] = useState<string>('');
  const [bookAuthor, setBookAuthor] = useState<string>('');
  const [bookSynopsis, setBookSynopsis] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateNewBook = async () => {
    try {
      setLoading(true);
      await createNewBook(bookName, bookAuthor, bookSynopsis);
      onNewBookCreated();
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoading(false);
        Alert.alert(error.message);
      } else {
        setLoading(false);
        Alert.alert('An unknown error occurred');
      }
    }
  };

  const handleCancelCreate = () => {
    onCancel();
  };

  return (
    <View style={styles.mainContainer}>
      {!loading && <>
        <View style={styles.textContainer}>
          <View style={styles.smallContainer}>
            <Text style={styles.purpleText}>Book tittle:</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Book tittle"
              value={bookName}
              onChangeText={newBookName => setBookName(newBookName)}
            />
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.purpleText}>Book author:</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Book author"
              value={bookAuthor}
              onChangeText={newBookAuthor => setBookAuthor(newBookAuthor)}
            />
          </View>
          <View style={styles.bigContainer}>
            <Text style={styles.purpleText}>Book synopsis:</Text>
            <ScrollView>
              <TextInput
                style={styles.inputScrollViewContainer}
                placeholder="Book synopsis"
                value={bookSynopsis}
                multiline={true}
                onChangeText={newBookSynopsis =>
                  setBookSynopsis(newBookSynopsis)
                }
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.cancelButton]}>
            <TouchableOpacity onPress={handleCancelCreate}>
              <Image
                source={require('../../assets/images/cancel.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.button, styles.confirmButton]}>
            <TouchableOpacity onPress={handleCreateNewBook}>
              <Image
                source={require('../../assets/images/check.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>}
      {loading && <Loader/>}
    </View>
  );
};

export default NewBook;
