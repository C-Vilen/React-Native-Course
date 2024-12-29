import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);    
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert('Invalid number', 'It must be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
        return;
    } 
    console.log(chosenNumber + ' is a valid number');
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        value={enteredNumber}
        onChangeText={numberInputHandler}
        maxLength={2} 
        keyboardType="number-pad" 
        style={styles.input} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#198c2e",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#eec53f",
    borderBottomWidth: 1,
    color: "#eec53f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
