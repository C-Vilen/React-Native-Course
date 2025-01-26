import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ title }) {
    return (
        <View>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        margin: 6,
    },
});