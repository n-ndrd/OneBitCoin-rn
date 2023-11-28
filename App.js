import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import AppRoutes from './src/router/app.route';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <AppRoutes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000'
  },
});

