import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function StarIconButton({icon, color, onPressed}) {
    return (
        <Pressable onPress={onPressed} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
}

export default StarIconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
});