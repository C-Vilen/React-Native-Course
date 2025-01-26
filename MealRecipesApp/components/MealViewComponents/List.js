import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
    return data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
    },
    itemText: {
        fontSize: 14,
    },
});