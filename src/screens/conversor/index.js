import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import { Fontisto } from '@expo/vector-icons';

export default function ConversorScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerFlag}>
        <View style={styles.content}>
          <Text style={styles.text}>Origem</Text>
          <View style={styles.flag}>
            <Text style={styles.text}>flag</Text>
            <Fontisto name="caret-down" size={16} color="#f50d41" />
          </View>
        </View>

        <TouchableOpacity>
          <Fontisto name="arrow-swap" size={26} color="#f50d41" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.text}>Destino</Text>
          <View style={styles.flag}>
            <Text style={styles.text}>flag</Text>
            <Fontisto name="caret-down" size={16} color="#f50d41" />
          </View>
        </View>


      </View>
      <View style={styles.conversion}>
        <Text style={styles.text}>1 USD = 0.9124 EUR</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>body</Text>
      </View>
    </View>
  )
}
