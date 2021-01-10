import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/card';
import NumberContainer from '../components/numberContainer';

const ganarateRandomBetween = (max, min, exclude) => {
  max = Math.ceil(max);
  min = Math.floor(min);

  const randNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randNumber === exclude) {
    return ganarateRandomBetween(max, min, exclude);
  } else {
    return randNumber;
  }
}

const GameScreen = ({ choosenNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    ganarateRandomBetween(100, 1, choosenNumber)
  )

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" />
        <Button title="GREATER" />
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15
  }
});

export default GameScreen;