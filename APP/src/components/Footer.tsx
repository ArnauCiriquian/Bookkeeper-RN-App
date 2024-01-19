import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles';

type FooterProps = {
  onNewBookClicked: () => void;
};

const Footer = ({onNewBookClicked}: FooterProps) => {
  const handleNewBook = () => {
    onNewBookClicked();
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.newBookButton]}
        onPress={handleNewBook}>
        <Image
          source={require('../../assets/images/plus.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/images/book.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
