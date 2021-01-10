import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';


const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.selectedNumberColor,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 30,
    color: colors.selectedNumberColor
  }
});

export default NumberContainer;