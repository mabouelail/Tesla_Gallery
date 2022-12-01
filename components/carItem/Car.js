import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import styles from './styles';
import CustomButton from '../Button/CustomButton';
import Header from '../Header/index';
const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <Header />
      <ImageBackground style={styles.backgroundImage} source={image} />

      <View style={styles.titles}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tagline}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          type="primary"
          content="custom order"
          action={() => {
            console.log('custom order is pressed');
          }}
        />
        <CustomButton
          type="secondary"
          content="Existing inventory"
          action={() => {
            console.log('Existing inventory is pressed');
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
