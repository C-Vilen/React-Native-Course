import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPressed }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.buttonStyle,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPressed}>
                <View
                    style={[
                        styles.innerContainer,
                        { backgroundColor: color },
                    ]}>
                <Text style={styles.titleStyle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.3,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
