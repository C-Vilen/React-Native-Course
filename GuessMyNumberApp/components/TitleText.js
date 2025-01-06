import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function TitleText({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.darkYellow,
    borderWidth: 2,
    borderColor: Colors.darkYellow,
    padding: 12,
  },
});
