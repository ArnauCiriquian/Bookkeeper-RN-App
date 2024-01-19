import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

const Loader = () => {
    return <View style={styles.loaderContainer}>
        <Text style={[styles.purpleText, styles.bigFont]}>Your data is loading...</Text>
    </View>;
};

export default Loader;
