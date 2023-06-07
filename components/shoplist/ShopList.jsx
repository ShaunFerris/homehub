import ShopItem from "./ShopItem";
import { useState } from "react";

const ShopList = () => {
    const testItemsToDisplay = [
        { name: "placeholder item", complete: false, creator: "Shaun" }
    ];

    const [items, setItems] = useState([]);

    const fetchListItems = async () => {
        try {
            const response = await fetch("api/shoplist");
            const data = await response.json();
            setItems(data);
        } catch (error) {

        }
    };

    return (
        <ul>
            {testItemsToDisplay.map((item) => (
                <ShopItem
                    key={item.name}
                    item={item}
                />
            ))}
        </ul>
    );
};

export default ShopList;