import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import colors from '../constants/colors';

import NumberContainer from '../components/numberContainer';
import Card from '../components/card';
import Input from '../components/input';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const inputNumberHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const inputResetHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const inputConfirmHandler = () => {
    const inputNumber = parseInt(enteredValue);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number must be between 0 and 99',
        [{ text: 'Close', style: 'destructive', onPress: inputResetHandler }]
      );
      return;
    }
    setSelectedNumber(inputNumber);
    setConfirmed(true);
    setEnteredValue('');
    Keyboard.dismiss();
  }

  const selectedNumberOutput = () => {
    if (confirmed) {
      return (
        <Card style={styles.selectedContainer}>
          <Text style={styles.selectedTitle}>You selected</Text>
          <NumberContainer number={selectedNumber} />
          <Button title="START GAME" onPress={() => { onStartGame(selectedNumber) }} />
        </Card>
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.card}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            autoCorrect={false}
            autoFocus={true}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputNumberHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={colors.secondary}
                onPress={inputResetHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={colors.primary}
                onPress={inputConfirmHandler}
              />
            </View>
          </View>
        </Card>
        {selectedNumberOutput()}
      </View >
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    marginVertical: 10,
    textAlign: 'center'
  },
  selectedContainer: {
    marginVertical: 40,
    alignItems: 'center'
  },
  selectedTitle: {
    fontSize: 16
  },

});

export default StartGameScreen;