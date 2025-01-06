import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
function GuessContainer({ children }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{children}</Text>
    </View>
  );
}

export default GuessContainer;

const styles = StyleSheet.create({
    guessContainer: {
        padding: 24,
        borderColor: Colors.darkYellow,
        borderWidth: 4,
        borderRadius: 12,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    guessText: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});