import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import color from '../theme/color';

const SuccessScreen = ({navigation}) => {
  return (
    <View>
      <Image
        source={images.background}
        style={{position: 'absolute', width: '100%'}}
      />
      <Image
        source={images.Rectangle}
        style={{position: 'absolute', width: '100%'}}
      />
      <View
        style={{
          marginTop: '50%',
          height: '60%',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.check} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 35,
            textAlign: 'center',
            color: 'black',
          }}>
          Successfully Verified
        </Text>
        <Button
          text={'Back To Login'}
          buttonStyle={{
            backgroundColor: color.yellow,
            marginTop: 30,
            width: '85%',
          }}
          textStyle={{color: 'white', fontSize: 15}}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
