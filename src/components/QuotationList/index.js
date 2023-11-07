import React, { Fragment } from 'react'
import { View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import QuotationItems from './quotationItens'

export default function QuotationList() {
    // const daysQuery = props.filterDay

    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textButtonQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(15)}
                >
                    <Text style={styles.textButtonQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(30)}
                >
                    <Text style={styles.textButtonQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(90)}
                >
                    <Text style={styles.textButtonQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(180)}
                >
                    <Text style={styles.textButtonQuery}>6M</Text>
                </TouchableOpacity>

            </View>

            <QuotationItems/>
            {/* <ScrollView
                horizontal={true}
            >
                <FlatList
                    data={props.listTransaction}
                    renderItem={({item}) => {
                        return <QuotationItems 
                            value={item.value}
                            data={item.data}
                        />
                    }}
                />
            </ScrollView> */}
        </Fragment>
    )
}
