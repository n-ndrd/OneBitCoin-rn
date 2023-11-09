import React from 'react'
import { View, Dimensions } from 'react-native'
import styles from './styles'

import { LineChart } from 'react-native-chart-kit'

export default function HistoryGraphic(props) {

  // const data = {
  //   labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  //   datasets: [
  //     {
  //       data: [50, 60, 70, 80, 90, 100],
  //     },
  //   ],
  // };
  
  const data = {
    datasets: [
      {
        data: props.data.map((item) => {
          return item.valueFinal
        }),
      },
    ],
  };

  return (
    <View style={styles.contentGraphic}>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 25}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLines={false}
        yLabelsOffset={1}
        withHorizontalLines={true}
        chartConfig={{
          backgroundColor: "#000000",
          backgroundGradientFrom: "#232323",
          backgroundGradientTo: "#3f3f3f",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "1",
            strokeWidth: "1.5",
            stroke: "#f50d41"
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  )
}
