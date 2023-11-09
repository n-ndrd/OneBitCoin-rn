import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import axios from 'axios';

import CurrentPrice from '../../components/currentPrice/';
import HistoryGraphic from '../../components/historyGraphic/';
import QuotationList from '../../components/quotationList/';

import { SecondsToDate } from '../../utils/secondsToDate';
import { addZero } from '../../utils/addZero';

const baseUrl = 'https://min-api.cryptocompare.com/data';
const currency = 'USD';
const symbol = 'BTC';

export default function Home() {
  const [coinsList, setCoinsList] = useState([]);
  const [qtdDays, setQtdDays] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function updateDays(number){
    setQtdDays(number);
  }

  async function getListQuotation() {
    setIsLoading(true)
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
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getListQuotation()
  }, [qtdDays]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice/>
      <HistoryGraphic
        data={coinsList}
      />
      <QuotationList
        filterDay={updateDays}
        listTransaction={coinsList}
        loading={isLoading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
