import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputCode = () => {
  return (
    <TextInput
      style={{
        borderColor: '#D1D1D1',
        borderWidth: 1,
        width: 50,
        height: 70,
        borderRadius: 10,
        marginHorizontal:8,
        color:"black"
      }}
    />
  );
};

export default InputCode;

const styles = StyleSheet.create({});
