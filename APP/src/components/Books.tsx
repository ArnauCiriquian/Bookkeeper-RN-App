import React from 'react';
import {useEffect, useState} from 'react';
import retriveBooks from '../logic/retriveBooks.ts';
import {ScrollView, Alert, Text, View} from 'react-native';
import Book from './Book.tsx';
import BookStructure from '../types.ts';
import {styles} from '../styles.ts';
import Loader from './Loader.tsx';

interface BookProps {
  onBookInfoClicked: (id: string) => void;
}

const Books = ({onBookInfoClicked}: BookProps) => {
  const [books, setBooks] = useState<BookStructure[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleRefreshBooks();
  }, []);

  const handleRefreshBooks = async () => {
    try {
      setLoading(true);
      const retrievedBooks = await retriveBooks();
      setBooks(retrievedBooks);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoading(false);
        Alert.alert(error.message);
      } else {
        Alert.alert('An unknown error occurred');
        setLoading(false);
      }
    }
  };

  return (
    <ScrollView style={styles.scrollviewContainer}>
      {books && !loading &&
        books.map((book: BookStructure) => (
          <Book
            key={book.id}
            id={book.id}
            bookName={book.bookName}
            bookAuthor={book.bookAuthor}
            creationDate={book.creationDate}
            onBookInfoClicked={onBookInfoClicked}
          />
        ))}
      {books && !books.length && !loading && (
        <View style={[styles.bookContainer, styles.noBooksInfoContainer]}>
          <Text style={[styles.blackText, styles.bigFont]}>
            Welcome to Bookkeeper, your personal book registry! Currently there
            are no books registered! Use the button at the bottom to add a new
            book!
          </Text>
        </View>
      )}
      {loading && <Loader/>}
    </ScrollView>
  );
};

export default Books;
