import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import InputCode from '../components/InputCode';
import Button from '../components/Button';
import color from '../theme/color';

const Verification = ({navigation}) => {
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
            fontWeight: 'bold',
            marginTop: 10,
            alignSelf: 'flex-start',
            marginLeft: '8%',
          }}>
          Email
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginTop: 5,
            alignSelf: 'flex-start',
            marginLeft: '8%',
            width: '88%',
          }}>
          An email has been sent to your registered email address. Enter the
          verification code below:
        </Text>
        <View style={{flexDirection: 'row', marginTop: 25}}>
          <InputCode />
          <InputCode />
          <InputCode />
          <InputCode />
          <InputCode />
        </View>
        <Text style={{color: 'black', marginVertical: 50}}>00:32</Text>
        <Text style={{color: 'black'}}>Didn't Receive A Code</Text>
        <TouchableOpacity style={{marginTop: 25}}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
            Resend Code
          </Text>
        </TouchableOpacity>
        <Button
          text={'Verify'}
          buttonStyle={{
            backgroundColor: color.yellow,
            marginTop: 30,
            width: '85%',
          }}
          textStyle={{color:"white",fontSize:15}}
          onPress={()=>{navigation.navigate("SuccessScreen")}}
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
