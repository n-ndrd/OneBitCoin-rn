import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice/';
import HistoryGraphic from './src/components/historyGraphic/';
import QuotationList from './src/components/quotationList/';
import QuotationItens from './src/components/quotationList/quotationItens/';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItens/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
