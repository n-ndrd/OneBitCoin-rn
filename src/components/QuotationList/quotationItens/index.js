import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationItens() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}> 
                    <Image 
                        style={styles.logBitcoin}
                        source={require('../../../img/bitcoin.png')}
                    />
                    <Text style={styles.dayQuotation}>05/11/2023</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.50</Text>
            </View>

        </View>
    )
}
