import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
const [myNumGuess, setMyNumGuess] = useState(0);
const [guessText, setGuessText] = useState('Guess a number between 1-100');
const [count, setCount] = useState(0);

const buttonPressedG = () => {

  if (myNumGuess > randomNumber) {
    setGuessText('Your guess ' + myNumGuess + ' is too high!')
  } else if (myNumGuess < randomNumber) {
    setGuessText('Your guess ' + myNumGuess + ' is too low!')
  } else {
    Alert.alert('You guessed the number in ' + count + ' guesses')
  }
  setCount(count + 1)
};


  return (
    <View style={styles.container}>
    <Text>{guessText}</Text>
    <TextInput style={styles.input} onChangeText={setMyNumGuess} value={myNumGuess} />
    <View style={styles.buttons}>
    <Button onPress={buttonPressedG} title="Make a guess" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
});
