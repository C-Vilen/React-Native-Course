import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./views/StartGameScreen";
import GameScreen from "./views/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  let screen = <StartGameScreen onSelectedNumber={startGameHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={["#04d32a", "#cbd5cd"]}
      style={styles.rootContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}>
        {screen}
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
