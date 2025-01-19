import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsView() {
    return (
        <View style={styles.container}>
            <Text>Meals View</Text>
        </View>
    );
}

export default MealsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});