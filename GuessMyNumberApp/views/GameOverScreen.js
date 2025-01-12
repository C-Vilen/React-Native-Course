import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ userNumber, numOfRounds, onStartNewGame }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.gameOverText}>Game Over!</Text>
            <View>
                <Text style={styles.infoText}>
                    Number of rounds{" "}
                    <Text style={styles.highligtedText}>{numOfRounds}</Text> to
                    guess your number{" "}
                    <Text style={styles.highligtedText}>{userNumber}</Text>
                </Text>
                <PrimaryButton onPress={onStartNewGame}>
                    Start new game
                </PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    gameOverText: {
        fontSize: 36,
        fontWeight: "bold",
        color: Colors.darkYellow,
    },
    infoText: {
        fontSize: 24,
        color: Colors.darkYellow,
        textAlign: "center",
        marginBottom: 16,
    },
    highligtedText: {
        fontWeight: "bold",
    },
});
