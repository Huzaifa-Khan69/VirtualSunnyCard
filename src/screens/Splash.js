import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import color from '../theme/color';

const Splash = ({navigation}) => {
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
      <View style={{justifyContent: 'center', alignItems: 'center',marginTop:25}}>
        <Image source={images.logo} />
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 12,
          }}>
          Wish Them With Beautiful Virtual Sunny Cards
        </Text>
        <Image
          source={images.front}
          style={{
            width: '90%',
            height: '60%',
            
          }}
        />
        <Button
          text={'Get Started'}
          buttonStyle={{backgroundColor: color.yellow}}
          textStyle={{color: 'white', fontWeight: 'bold'}}
          onPress={()=>{navigation.navigate("SignInWithGoogleAndFacebook")}}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

