import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import TitleText from '../components/TitleText';
import GuessContainer from '../components/GuessContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min) + min);
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    useEffect(() => {
        if (currentGuess === userNumber) {
            Alert.alert('Game Over!', `Your number is ${userNumber}`, [{text: 'Okay', style: 'cancel'}]);
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if ((direction === 'LOWER' && currentGuess < userNumber) || 
            (direction === 'HIGHER' && currentGuess > userNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        } else if (direction === 'LOWER') {
            maxBoundary = currentGuess;
        } else if (direction === 'HIGHER') {
            minBoundary = currentGuess;
        }
        const newRandNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNum);
    }
    
    return (
        <View style={styles.inputContainer}>
            <TitleText>Game Screen</TitleText>
            <GuessContainer>{currentGuess}</GuessContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Is your number lower or higher?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'LOWER')}><Ionicons name='remove-circle-outline' size={24}/></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'HIGHER')}><Ionicons name='add-circle-outline' size={24}/></PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
        
}

export default GameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 16,
        fontSize: 18,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});