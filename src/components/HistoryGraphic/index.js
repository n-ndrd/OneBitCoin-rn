import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

export default function HistoryGraphic() {
  return (
    <View style={styles.contentGraphic}>
      <Image
        style={styles.img}
        source={require('../../img/graphic.png')}
      />
    </View>
  )
}
