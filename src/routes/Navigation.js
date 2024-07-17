import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import SignInWithGoogleAndFacebook from '../screens/SignInWithGoogleAndFacebook';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Verification from '../screens/Verification';
import SuccessScreen from '../screens/SuccessScreen';
import Store from '../screens/Store';
import AddToCart from '../screens/AddToCart';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    // <Text style={{color:"white"}}>dshfakljtgr;egh</Text>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignInWithGoogleAndFacebook" component={SignInWithGoogleAndFacebook} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="AddToCart" component={AddToCart} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
