import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    
    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
    }
    
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        placeholder="Your course goals!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 10,
  },
});
