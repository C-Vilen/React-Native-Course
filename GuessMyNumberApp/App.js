import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/Colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./views/StartGameScreen";
import GameScreen from "./views/GameScreen";
import GameOverScreen from "./views/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(undefined);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(undefined);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onSelectedNumber={startGameHandler} />;
    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                numOfRounds={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <LinearGradient
            colors={[Colors.lightGreen, Colors.whiteGreen]}
            style={styles.rootContainer}>
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootContainer}
                imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootContainer}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.2,
    },
});
