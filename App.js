import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import Index from './src/index';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ubuntu-regular': require('./assets/font//Ubuntu-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <>
        {
          this.state.fontLoaded ? (
            <Index />
          ) : null
        }
      </>
    );
  }
}
