import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import retriveBook from '../logic/retrieveBook';
import BookStructure from '../types';
import deleteBook from '../logic/deleteBook';
import {styles} from '../styles';
import Loader from './Loader';

interface BookInfoProps {
  id: string;
  onGoBack: () => void;
  onGoToEditBook: (id: string) => void;
}

const BookInfo = ({id, onGoBack, onGoToEditBook}: BookInfoProps) => {
  const [book, setBook] = useState<BookStructure | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoBackToHome = () => {
    onGoBack();
  };

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

  const handleGoToEditBook = () => {
    onGoToEditBook(id);
  };

  const handleDeleteBook = async () => {
    try {
      if (book) {
        Alert.alert(
          'Warning',
          'You are about to delete the selected book. This cannot be undone! Are you sure?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: async () => {
                setLoading(true);
                await deleteBook(id);
                setLoading(false);
                handleGoBackToHome();
              },
            },
          ],
          {cancelable: false},
        );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('An unknown error occurred');
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      {!loading && (
        <>
          <View style={styles.textContainer}>
            {book && (
              <>
                <View style={styles.smallContainer}>
                  <Text style={styles.purpleText}>Book tittle:</Text>
                  <Text style={[styles.blackText, styles.mediumFont]}>
                    {book?.bookName}
                  </Text>
                </View>
                <View style={styles.smallContainer}>
                  <Text style={styles.purpleText}>Book author:</Text>
                  <Text style={[styles.blackText, styles.mediumFont]}>
                    {book?.bookAuthor}
                  </Text>
                </View>
                <View style={styles.bigContainer}>
                  <Text style={styles.purpleText}>Book synopsis:</Text>
                  <ScrollView>
                    <Text style={[styles.blackText, styles.mediumFont]}>
                      {book?.bookSynopsis}
                    </Text>
                  </ScrollView>
                </View>
              </>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleGoBackToHome}>
              <Image
                source={require('../../assets/images/back.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoToEditBook}>
              <Image
                source={require('../../assets/images/edit.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeleteBook}>
              <Image
                source={require('../../assets/images/delete.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {loading && <Loader />}
    </View>
  );
};

export default BookInfo;
