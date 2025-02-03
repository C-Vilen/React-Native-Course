import { StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoriesView from "./views/CategoriesView";
import MealsView from "./views/MealsView";
import MealView from "./views/MealView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesView from "./views/FavoritesView";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#431a02" },
                headerTintColor: "white",
                sceneStyle: { backgroundColor: "#784924" },
                drawerContentStyle: { backgroundColor: "#784924" },
                drawerActiveTintColor: "white",
                drawerInactiveTintColor: "#a09e9e",
            }}>
            <Drawer.Screen
                name="Categories"
                component={CategoriesView}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesView}
                options={{
                    title: "My Favorites",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

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
                        name="Drawer"
                        component={DrawerNavigatior}
                        options={{
                            title: "All Categories",
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="Meals" component={MealsView} />
                    <Stack.Screen
                        name="Meal"
                        component={MealView}
                        options={{ title: "About the meal" }}
                    />
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
