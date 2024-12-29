import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./views/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#04d32a", "#cbd5cd"]}
      style={styles.rootContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.2,
  }
});
