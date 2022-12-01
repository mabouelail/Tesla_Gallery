import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
export default Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  );
};
