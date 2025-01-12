import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function GuessLogItem({ roundNumber, guessNumber }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's guess: {guessNumber}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.darkYellow,
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: "OpenSans-Bold",
        fontSize: 16,
        color: "white",
    },
});
