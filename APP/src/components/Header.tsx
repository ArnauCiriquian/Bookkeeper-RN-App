import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from '../styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/images/bookkeeperLogo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.appNameText}>Bookkeeper</Text>
    </View>
  );
};

export default Header;
