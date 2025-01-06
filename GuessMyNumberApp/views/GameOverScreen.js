import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
function GameOverScreen() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.gameOverText}>Game Over!</Text>
      </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    gameOverText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.darkYellow,
    },
});