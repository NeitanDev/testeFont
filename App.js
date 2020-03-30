import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import Index from './src/index';

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'ubuntu-regular': require('./assets/font//Ubuntu-Regular.ttf'),
    });
  }
  render() {
    return (
      <Index/>
    );
  }
}