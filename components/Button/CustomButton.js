import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import styles from './styles';
export default CustomButton = ({ type, content, action }) => {
  const backColor  = (type === 'primary') ? '#171A20CC' : '#FFFFFFA6';
  const fontColor = (type === 'primary') ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backColor}]}
        onPress={action}
      >
        <Text style={[styles.text, {color:fontColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};
