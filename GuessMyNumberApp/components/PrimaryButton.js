import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.pressedDarkYellow }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.buttonPressed]
                        : styles.buttonInnerContainer
                }>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.darkYellow,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
    buttonPressed: {
        opacity: 0.75,
    },
});
