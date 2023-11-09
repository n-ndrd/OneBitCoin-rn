import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import axios from 'axios'

export default function CurrentPrice() {
  const [price, setPrice] = useState('');

  async function getPrice() {
    try {
      const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD`);
      setPrice(response.data.USD);
    }
    catch (error) {
      console.log('Erro: ' + error)
    }
  }

  useEffect(() => {
    getPrice()
  })

  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ {price}</Text>
      <Text style={styles.textPrice}>Ultima Cotação Bitcoin (BTC)</Text>
    </View>
  )
}
