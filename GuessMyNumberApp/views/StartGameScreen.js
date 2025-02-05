import { useState } from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
import TitleText from "../components/TitleText";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onSelectedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");
    const { width, height } = useWindowDimensions();

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number",
                "It must be a number between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        onSelectedNumber(chosenNumber);
    }

    const marginTopDistance = height < 480 ? 15 : 100;

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: marginTopDistance },
                    ]}>
                    <TitleText>Guess my number</TitleText>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                            maxLength={2}
                            keyboardType="number-pad"
                            style={styles.insertNumberInput}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>
                                    Reset
                                </PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>
                                    Confirm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    insertNumberInput: {
        height: 40,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.darkYellow,
        borderBottomWidth: 1,
        color: Colors.darkYellow,
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
