import React from 'react'
import { View, Text } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function QuotationItems(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}> 
                    <FontAwesome name="bitcoin" size={35} color="#f50d41" />
                    <Text style={styles.dayQuotation}>{props.date}</Text>
                </View>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$ {props.value}</Text>
            </View>
        </View>
    )
}
