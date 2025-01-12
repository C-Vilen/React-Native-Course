import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import TitleText from "../components/TitleText";
import GuessContainer from "../components/GuessContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

const generatedNumbersSet = new Set();
let minBoundary = 1;
let maxBoundary = 100;

function addGeneratedNumber(num) {
    generatedNumbersSet.add(num);
}

function generateRandomBetween(min, max, setOfNums) {
    let randNum;
    do {
        randNum = Math.floor(Math.random() * (max - min) + min);
    } while (setOfNums.has(randNum));
    addGeneratedNumber(randNum);
    return randNum;
}

function GameScreen({ userNumber, onGameOver }) {
    const [currentGuess, setCurrentGuess] = useState(null);
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
        const initialGuess = generateRandomBetween(1, 100, generatedNumbersSet);
        setCurrentGuess(initialGuess);
        setRounds([initialGuess]);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds.length);
            minBoundary = 1;
            maxBoundary = 100;
            generatedNumbersSet.clear();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === "LOWER" && currentGuess < userNumber) ||
            (direction === "HIGHER" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "LOWER") {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            generatedNumbersSet
        );
        setCurrentGuess(newRandNum);
        setRounds((prevRounds) => [newRandNum, ...prevRounds]);
    }

    const roundsCount = rounds.length;

    return (
        <View style={styles.inputContainer}>
            <TitleText>Game Screen</TitleText>
            {currentGuess !== null && (
                <GuessContainer>{currentGuess}</GuessContainer>
            )}
            <Card>
                <InstructionText style={styles.instructionText}>
                    Is your number lower or higher?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("LOWER")}>
                            <Ionicons name="remove-circle-outline" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("HIGHER")}>
                            <Ionicons name="add-circle-outline" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.roundListContainer}>
                <FlatList
                    data={rounds}
                    keyExtractor={(guessItem) => guessItem}
                    renderItem={(guessItem) => (
                        <GuessLogItem
                            roundNumber={roundsCount - guessItem.index}
                            guessNumber={guessItem.item}
                        />
                    )}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 16,
        fontSize: 18,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    roundListContainer: {
        flex: 1,
        padding: 16,
    },
});
