import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const startGameHandler = num => {
    setUserNumber(num)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) content = <GameScreen choosenNumber={userNumber} />

  return (
    <View style={styles.container}>
      <Header title='Guess the number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
