import React from 'react'
import { View, Text } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}> 
                    <FontAwesome name="bitcoin" size={35} color="#f50d41" />
                    <Text style={styles.dayQuotation}>06/11/2023</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53333333,0000</Text>
            </View>

        </View>
    )
}
