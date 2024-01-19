import React, {useEffect} from 'react';
import {useState} from 'react';
import {styles} from '../styles';
import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import updateBook from '../logic/updateBook';
import BookStructure from '../types';
import retriveBook from '../logic/retrieveBook';
import Loader from './Loader.tsx';

interface UpdateBookProps {
  id: string;
  onBookUpdated: () => void;
  onCancelUpdate: (id: string) => void;
}

const UpdateBook = ({id, onBookUpdated, onCancelUpdate}: UpdateBookProps) => {
  const [book, setBook] = useState<BookStructure | null>(null);
  const [newBookName, setNewBookName] = useState<string>('');
  const [newBookAuthor, setNewBookAuthor] = useState<string>('');
  const [newBookSynopsis, setNewBookSynopsis] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleRefreshBook();
  }, []);

  const handleRefreshBook = async () => {
    try {
      setLoading(true);
      const responseBook = await retriveBook(id);
      setBook(responseBook);
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

  useEffect(() => {
    if (book) {
      setNewBookName(book.bookName);
      setNewBookAuthor(book.bookAuthor);
      setNewBookSynopsis(book.bookSynopsis);
    }
  }, [book]);

  const handleUpdateBook = async () => {
    try {
      setLoading(true);
      await updateBook(id, newBookName, newBookAuthor, newBookSynopsis);
      onBookUpdated();
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert(error.message);
        setLoading(false);
      } else {
        Alert.alert('An unknown error occurred');
        setLoading(false);
      }
    }
  };

  const handleCancelUpdate = () => {
    onCancelUpdate(id);
  };

  return (
    <View style={styles.mainContainer}>
      {!loading && (
        <>
          <View style={styles.textContainer}>
            <View style={styles.smallContainer}>
              <Text style={styles.purpleText}>Book tittle:</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder={book?.bookName}
                onChangeText={newName => setNewBookName(newName)}
              />
            </View>
            <View style={styles.smallContainer}>
              <Text style={styles.purpleText}>Book author:</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder={book?.bookAuthor}
                onChangeText={newAuthor => setNewBookAuthor(newAuthor)}
              />
            </View>
            <View style={styles.bigContainer}>
              <Text style={styles.purpleText}>Book synopsis:</Text>
              <ScrollView>
                <TextInput
                  style={styles.inputScrollViewContainer}
                  placeholder={book?.bookSynopsis}
                  multiline={true}
                  onChangeText={newSynopsis => setNewBookSynopsis(newSynopsis)}
                />
              </ScrollView>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.cancelButton]}>
              <TouchableOpacity onPress={handleCancelUpdate}>
                <Image
                  source={require('../../assets/images/cancel.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.button, styles.confirmButton]}>
              <TouchableOpacity onPress={handleUpdateBook}>
                <Image
                  source={require('../../assets/images/check.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      {loading && <Loader />}
    </View>
  );
};

export default UpdateBook;
