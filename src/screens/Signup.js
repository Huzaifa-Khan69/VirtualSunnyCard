import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import color from '../theme/color';

const Signup = ({navigation}) => {
  const [select,setSelect]=useState(false)
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
          marginTop: 25,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.logo} />
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            width: '70%',
            marginTop: 12,
            alignSelf: 'flex-start',
          }}>
          Create An Account
        </Text>
        <Input placeholder={'Full Name'} />
        <Input placeholder={'Email Address'} />
        <Input placeholder={'Password'} />
        <Input placeholder={'Re-type Password'} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignSelf: 'flex-start',
            marginLeft: 10,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
          onPress={()=>setSelect(!select)}
            style={select?{width: 18, height: 18, borderRadius: 10, borderWidth: 1,backgroundColor:"black"}:{width: 18, height: 18, borderRadius: 10, borderWidth: 1}}
          />
          <Text style={{color: 'black', fontSize: 12, marginLeft: 8}}>
            I have read and accept the{' '}
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              paddingBottom: 2,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                textDecorationLine: 'underline',
              }}>
              terms and conditions
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          text={'Create An Account'}
          buttonStyle={{
            backgroundColor: color.yellow,
            marginTop: 15,
            width: '95%',
          }}
          textStyle={{color: 'white', fontSize: 15}}
          onPress={()=>{navigation.navigate("Verification")}}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
