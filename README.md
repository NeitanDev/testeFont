# testeFont
teste para colocar fonte do google fonts em app react-native usando a lib expo-cli, pra criar é facil é so baixar
os arquivos das fontes colocar na pasta assets/fonts, ai no app.js mudar de function pra class ai colocar uma função
componentDidMount(), ai vai servir pra todas as paginas que vc quiser, segue o exemplo:

app.js:

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
      <Index />
    );
  }
}


index.js:


import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 56, fontFamily: 'ubuntu-regular' }}>
                Sounou
        </Text>
        </View>
    );
}
