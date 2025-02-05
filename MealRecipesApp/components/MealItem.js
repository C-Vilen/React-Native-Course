import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealInformation from "./MealInformation";

function MealItem({
    id,
    title,
    imageURL,
    duration,
    complexity,
    affordability,
}) {
    const navigation = useNavigation();

    function onPressedHandler() {
        navigation.navigate("Meal", {
            mealId: id,
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.buttonStyle,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPressedHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageURL }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealInformation
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.3,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
});
