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
            <Stack.Navigator>
              <Stack.Screen name="Meal Categories" component={CategoriesView}/>
              <Stack.Screen name="Meals" component={MealsView}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#24180f",

    },
});
