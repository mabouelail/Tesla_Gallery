import React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem/Car';
export default CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};
