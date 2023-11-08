import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import axios from 'axios';

import CurrentPrice from './src/components/currentPrice/';
import HistoryGraphic from './src/components/historyGraphic/';
import QuotationList from './src/components/quotationList/';

import { SecondsToDate } from './src/utils/secondsToDate';
import { addZero } from './src/utils/addZero';

const baseUrl = 'https://min-api.cryptocompare.com/data';
const currency = 'USD';
const symbol = 'BTC'

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  // const [coinsGaphicList, setCoinsGaphicList] = useState([0]);
  const [qtdDays, setQtdDays] = useState(30);
  // const [updateData, setUpdateData] = useState(true);

  function updateDays(number){
    setQtdDays(number);
    // setUpdateData(true);
  }

  async function getListQuotation() {
    try {
        const date = new Date();
        const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
        date.setDate(date.getDate() - qtdDays);
        const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  
        const response = await axios.get(`${baseUrl}/v2/histoday?fsym=${symbol}&tsym=${currency}&limit=${qtdDays}`);

        const historicalPrices = response.data.Data.Data;

        const queryCoinsList = historicalPrices.map((item) =>{
          return{
            date: SecondsToDate(item.time),
            valueInicial: item.open,
            valueFinal: item.close
          }
        })

        setCoinsList(queryCoinsList)
    } 
    catch (error) {
      console.log('Erro: '+error)  
    }
  }

  useEffect(() => {
    getListQuotation()
  }, [qtdDays]);

  // useEffect(() => {
  //   if(updateData){
  //     setUpdateData(false)
  //   }
  // }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList
        filterDay={updateDays}
        listTransaction={coinsList}
      />
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
