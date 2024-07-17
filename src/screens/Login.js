import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Input from '../components/Input';
import Button from '../components/Button';
import color from '../theme/color';

const Login = ({navigation}) => {
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
      <View style={{marginTop: 25, width: '90%', alignSelf: 'center',alignItems:"center",justifyContent:"center"}}>
        <Image source={images.logo}/>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            width: '70%',
            marginTop: 12,
            alignSelf: 'flex-start',
          }}>
          Sign In With Email or Username
        </Text>
        <Input placeholder={'username or email'} />
        <TouchableOpacity style={{marginLeft:"55%",marginVertical:10}}>
          <Text style={{color: 'black'}}>
            forget password?
          </Text>
        </TouchableOpacity>
        <Input placeholder={'password'} />
        <Button
          text={'Sign In'}
          buttonStyle={{backgroundColor: color.yellow,marginTop:25,width:"95%"}}
          textStyle={{color: 'white', fontSize:15}}
          onPress={()=>{navigation.navigate("Store")}}
        />
        <View style={{width:"90%",borderWidth:1,marginVertical:20,borderColor:"#D4D4D4"}}/>
        <Text style={{color:"black",fontSize:15}}>Don't have an account?</Text>
        <Button text={"Create An Account"}
        buttonStyle={{backgroundColor:"black",marginTop:20,width:"95%"}}
        textStyle={{color:"white",fontSize:15}}
        onPress={()=>{navigation.navigate("Signup")}}/>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
