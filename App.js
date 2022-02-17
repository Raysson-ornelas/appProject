import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { css } from './assets/css/Css';
import { Text, View } from 'react-native';
import Page from './views/Page';


export default function App() {
  return (
    <View style={css.container}>
      <Text>Teste</Text>
      <Page/>
      <StatusBar style="auto" />
    </View>
  );
}
