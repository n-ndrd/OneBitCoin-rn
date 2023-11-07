import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/currentPrice/';
import HistoryGraphic from './src/components/historyGraphic/';
import QuotationList from './src/components/quotationList/';
import QuotationItems from './src/components/quotationList/quotationItens/';

import { fetchHistoricalPrices } from './src/utils/url';

// async function getListCoins(url){
//   let response = await fetch(url);
//   let returnApi = await response.json();
//   let selectListQuotations = returnApi.bpi; 

//   const queryCoinsList = Object.keys(selectListQuotations.map((key) =>{
//     return{
//       data: key.split('-')('/').reverse().join('/'),
//       value: selectListQuotations[key]
//     }
//   }))

//   let data = queryCoinsList.reverse();
//   console.log(data);
// }

// async function getPriceCoinsGraphic(url){
//   let responseG = await fetch(url);
//   let returnApiG = await responseG.json();
//   let selectListQuotationsG = returnApiG.bpi; 

//   const queryCoinsList = Object.keys(selectListQuotationsG.map((key) =>{
//       selectListQuotationsG[key]
//   }))
  
//   let dataG = queryCoinsList;
//   console.log(dataG);
// }

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGaphicList, setCoinsGaphicList] = useState([0]);
  const [qtdDays, setQtdDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDays(number){
    setQtdDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    async function getListQuotation() {
      try {
        const prices = fetchHistoricalPrices(7)
    
        setCoinsList(prices);
        console.log(prices)
      } 
      catch (error) {
        console.log('Erro: '+error)  
      }
    }

    getListQuotation()

    if(updateData){
      setUpdateData(false)
    }

  }, [updateData]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList
        // filterDay={updateDays}
        // listTransaction={coinsList}
      />
      <QuotationItems/>
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
