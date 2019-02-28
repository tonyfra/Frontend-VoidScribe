import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

// import the different screens
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
import LoadingScreen from './Screens/LoadingScreen';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import WriteScreen from './Screens/WriteScreen';
import ReadScreen from './Screens/ReadScreen';
import SelectNameCatScreen from './Screens/SelectNameCatScreen';


const MyAppNavigator = createSwitchNavigator(
  {
  LoadingScreen,
  MainScreen,
  SignupScreen,
  LoginScreen,
  ReadScreen,
  WriteScreen,
  SelectNameCatScreen,
  },
  {
    initialRouteName: 'LoadingScreen'
  }
  
);
const AppContainer = createAppContainer(MyAppNavigator);
export default AppContainer;
