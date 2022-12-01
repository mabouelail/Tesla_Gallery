import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CarItem from './components/carItem/Car';
import CarsList from './components/CarsList/index';

export default App = () => {
  return (
    <View style={styles.container}>
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
