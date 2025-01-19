import { StatusBar, StyleSheet, View } from "react-native";
import CategoriesView from "./views/CategoriesView";

export default function App() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle={"light-content"} />
          <CategoriesView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#24180f",

    },
});
