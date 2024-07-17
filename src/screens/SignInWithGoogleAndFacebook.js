import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import color from '../theme/color';

const SignInWithGoogleAndFacebook = ({navigation}) => {
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
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
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
        <Button
          text={'Get Started'}
          buttonStyle={{backgroundColor: color.yellow, marginTop: 10}}
          textStyle={{color: 'white', fontSize: 15}}
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Sign In to your account
        </Text>
        <Button
          text={'Sign In With Google'}
          buttonStyle={{backgroundColor: 'white', marginTop: 15}}
          textStyle={{color: 'black', fontSize: 15, marginLeft: 8}}
          img={<Image source={images.google} style={{width: 25, height: 25}} />}
          onPress={() => {
            navigation.navigate('Store');
          }}
        />
        <Button
          text={'Sign In With Facebook'}
          buttonStyle={{backgroundColor: 'white', marginTop: 15}}
          textStyle={{color: 'black', fontSize: 15, marginLeft: 5}}
          img={
            <Image source={images.facebook} style={{width: 25, height: 25}} />
          }
          onPress={() => {
            navigation.navigate('Store');
          }}
        />
        <Button
          text={'Continue With Email'}
          buttonStyle={{backgroundColor: 'black', marginTop: 15}}
          textStyle={{color: 'white', fontSize: 15}}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default SignInWithGoogleAndFacebook;

const styles = StyleSheet.create({});
