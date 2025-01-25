import { StatusBar, StyleSheet, View } from "react-native";
import CategoriesView from "./views/CategoriesView";
import MealsView from "./views/MealsView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#431a02" },
                        headerTintColor: "white",
                        cardStyle: { backgroundColor: "#784924" },
                    }}>
                    <Stack.Screen
                        name="MealCategories"
                        component={CategoriesView}
                        options={{ title: "All Categories" }}
                    />
                    <Stack.Screen name="Meals" component={MealsView} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
