import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function categoryRenderItem( itemData ) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

function CategoriesView() {
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