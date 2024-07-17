import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import images from '../assets/images';
import Button from '../components/Button';
import color from '../theme/color';
import Product from '../components/Product';
import Carousel from 'react-native-reanimated-carousel';
const Store = ({navigation}) => {
  const occasional_cards_data = [
    {
      img: images.product1,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product1,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product1,
      name: 'Product',
      price: '€4350',
    },
  ];
  const tarot_inspired_cards_data = [
    {
      img: images.product2,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product2,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product2,
      name: 'Product',
      price: '€4350',
    },
  ];
  const blank_cards_data = [
    {
      img: images.product3,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product3,
      name: 'Product',
      price: '€4350',
    },
    {
      img: images.product3,
      name: 'Product',
      price: '€4350',
    },
  ];
 const [Christmas,setChristmas]=useState(false)
 const [Celebration,setCelebration]=useState(false)
 const [getWellSoon,setGetWellSoon]=useState(false)
  return (
    <ScrollView>
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
      <View>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            marginTop: 30,
            textAlign: 'center',
          }}>
          Occasional Cards
        </Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginTop: 20, paddingRight: 15}}>
          <Button
            text={'Celebration'}
            buttonStyle={Celebration?{backgroundColor: color.yellow,
              width: 120,
              height: 40,
              marginLeft: 20,}:{
              backgroundColor: "#FFE4C9",
              width: 120,
              height: 40,
              marginLeft: 20,
            }}
            textStyle={Celebration?{color: "white", fontSize: 15}:{color: 'black', fontSize: 15}}
            onPress={()=>setCelebration(!Celebration)}
          />
          <Button
            text={'Chrishmas'}
            buttonStyle={Christmas?{
              backgroundColor: color.yellow,
              width: 120,
              height: 40,
              marginLeft: 20,
            }:{
              backgroundColor: "#FFE4C9",
              width: 120,
              height: 40,
              marginLeft: 20,
            }}
            textStyle={Christmas?{color: 'white', fontSize: 15}:{color: 'black', fontSize: 15}}
            onPress={()=>setChristmas(!Christmas)}
          />
          <Button
            text={'Get Well Soon'}
            buttonStyle={getWellSoon?{
              backgroundColor: color.yellow,
              width: 120,
              height: 40,
              marginLeft: 20,
            }:{
              backgroundColor: "#FFE4C9",
              width: 120,
              height: 40,
              marginLeft: 20,
            }}
            textStyle={getWellSoon?{color: 'white', fontSize: 15}:{color: 'black', fontSize: 15}}
            onPress={()=>setGetWellSoon(!getWellSoon)}
          />
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
          }}>
          <Carousel
            loop
            width={300}
            height={230}
            autoPlay={true}
            data={occasional_cards_data}
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={({item}) => (
              <Product
                img={item.img}
                productName={item.name}
                price={item.price}
                onPress={() => {
                  navigation.navigate('AddToCart');
                }}
              />
            )}
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Tarot-Inspired Cards
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
          }}>
          <Carousel
            loop
            width={300}
            height={230}
            autoPlay={true}
            data={tarot_inspired_cards_data}
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={({item}) => (
              <Product
                img={item.img}
                productName={item.name}
                price={item.price}
                onPress={() => {
                  navigation.navigate('AddToCart');
                }}
              />
            )}
          />
        </View>

        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Blank Cards
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
          }}>
          <Carousel
            loop
            width={300}
            height={230}
            autoPlay={true}
            data={blank_cards_data}
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={({item}) => (
              <Product
                img={item.img}
                productName={item.name}
                price={item.price}
                onPress={() => {
                  navigation.navigate('AddToCart');
                }}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create();
