import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Product = ({img,productName,price,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        backgroundColor: 'white',
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginLeft:15
      }}>
      <Image source={img} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 200,
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
          {productName}
        </Text>
        <Text style={{color: 'black', fontSize: 20}}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
