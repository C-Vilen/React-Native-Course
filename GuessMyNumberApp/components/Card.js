import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { View } from "react-native";

function Card({ children }) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.darkGreen,
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
});