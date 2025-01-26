import { View, Text, Image, StyleSheet, Platform, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInformation from "../components/MealInformation";
import Subtitle from "../components/MealViewComponents/Subtitle";
import List from "../components/MealViewComponents/List";

function MealItem({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
                </View>
            </View>
            <Text style={styles.title}>This is meal id: {mealId}</Text>
            <MealInformation 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.informationText} />
            <View style={styles.listOuterCointaner}>
                <View style={styles.listCointaner}>
                    <Subtitle title="Ingredients" />
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle title="Steps" />
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
    },
    imageWrapper: {
        alignSelf: "center",
        width: "90%",
        height: 350,
        borderRadius: 8,
        margin: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    informationText: {
        color: "white",
    },
    listOuterCointaner: {
        alignItems: "center",
        marginBottom: 64,
    },
    listCointaner: {
        width: "90%",
    }
});
