import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../components/Button';
import color from '../theme/color';
import { Rating, AirbnbRating } from 'react-native-ratings';

const AddToCart = ({navigation}) => {
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
      <Header
        icon1={<AntDesign name={'search1'} size={25} color={'black'} />}
        text={'Store'}
        icon2={<Feather name={'shopping-cart'} size={25} color={'black'} />}
      />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.birthday} style={{height: '60%'}} />
        <View
          style={{
            width: '100%',
            height: '43%',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Product
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
            <Rating imageSize={25}/>

          <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>
            1.248 Reviews
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            width: '80%',
            marginTop: 15,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
          onPress={()=>{navigation.navigate("Store")}}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#D1D1D1',
              borderWidth: 1,
              width: '15%',
              borderRadius: 10,
            }}>
            <AntDesign name={'arrowleft'} size={35} color={'#D1D1D1'} />
          </TouchableOpacity>
          <Button
            text={'Add To Cart'}
            buttonStyle={{
              backgroundColor: color.yellow,
              width: '50%',
              marginLeft: 35,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
