import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({placeholder, inputStyle,setText,value}) => {
  return (
    <TextInput
    placeholderTextColor={"black"}
        style={[
          {
            width: '95%',
            height: 60,
            borderWidth: 1,
            borderRadius: 10,
            alignSelf: 'center',
            color:"black",
            borderColor: '#D1D1D1',
            marginTop: 15,
            paddingLeft: 15,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        onChangeText={setText}
        value={value}
      />
  )
}

export default Input

const styles = StyleSheet.create({})