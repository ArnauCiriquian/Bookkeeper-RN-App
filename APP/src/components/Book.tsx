import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';

interface BookProps {
  id: string;
  bookName: string;
  bookAuthor: string;
  creationDate: Date;
  onBookInfoClicked: (id: string) => void;
}

const Book = ({id, bookName, bookAuthor, onBookInfoClicked}: BookProps) => {
  const handleGoToBookInfo = () => {
    onBookInfoClicked(id);
  };

  return (
    <View style={styles.bookContainer}>
      <View style={styles.bookInfoContainer}>
        <Text style={styles.bookTitleText}>{bookName}</Text>
        <Text style={styles.blackText}>{bookAuthor}</Text>
      </View>
      <TouchableOpacity onPress={handleGoToBookInfo}>
        <Image style={styles.icon} source={require('../../assets/images/info.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Book;
