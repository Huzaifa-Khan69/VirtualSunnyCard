import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({text, textStyle, buttonStyle,img,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        {
          width: '80%',
          borderRadius: 10,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:"row",
        },
        buttonStyle,
      ]}>
        {img?img:null}
      <Text style={[{fontSize: 20, color: 'black'}, textStyle]}> {text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
