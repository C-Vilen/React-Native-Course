import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesView({ navigation }) {
    function categoryRenderItem(itemData) {
        function onPressedHandler() {
            navigation.navigate("Meals", {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPressed={onPressedHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={categoryRenderItem}
            numColumns={2}
        />
    );
}

export default CategoriesView;
