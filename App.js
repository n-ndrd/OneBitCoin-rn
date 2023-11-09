import React from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './src/screens/home/';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    backgroundColor: '#000000'
  },
});

