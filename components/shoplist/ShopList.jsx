import ShopItem from "./ShopItem";
import { useState, useEffect, useContext } from "react";
import { ShoplistContext } from "@/context/ShoplistContext";

const ShopList = () => {
    const [items, setItems] = useState([]);
    const { hasUpdated, setHasUpdated } = useContext(ShoplistContext);

    useEffect(() => {
        const fetchListItems = async () => {
            try {
                const response = await fetch("api/shoplist");
                const data = await response.json();
                setItems(data);
            } catch (error) {

            }
        };

        if (hasUpdated) {
            fetchListItems();
            setHasUpdated(false);
        }

    }, [hasUpdated, setHasUpdated]);

    return (
        <ul>
            {items.map((item) => (
                <ShopItem
                    key={item.name}
                    item={item}
                />
            ))}
        </ul>
    );
};

export default ShopList;