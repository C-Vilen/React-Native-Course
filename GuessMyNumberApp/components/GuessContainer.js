import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";
function GuessContainer({ children }) {
    const { width, height } = useWindowDimensions();
    const padding = height < 480 ? 12 : 24;
    const margin = height < 480 ? 12 : 24;
    const fontSize = height < 480 ? 24 : 36;
    return (
        <View style={[styles.guessContainer, { padding, margin }]}>
            <Text style={[styles.guessText, { fontSize }]}>{children}</Text>
        </View>
    );
}

export default GuessContainer;

const styles = StyleSheet.create({
    guessContainer: {
        padding: 12,
        borderColor: Colors.darkYellow,
        borderWidth: 4,
        borderRadius: 12,
        margin: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    guessText: {
        fontFamily: "OpenSans-Bold",
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});
