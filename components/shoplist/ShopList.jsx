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

    const handleDelete = async (item) => {
        const hasConfirmed = confirm(
            "Are you sure you wish to delete this item?"
        );

        if (hasConfirmed) {
            try {
                const response = await fetch(
                    `api/shoplist/${item._id.toString()}`, {
                    method: "DELETE"
                });
                setHasUpdated(true);
                if (response.ok) {
                    console.log("Deleted one item!")
                }
            } catch (error) {
                console.log("Failed to delete item: ", error);
            }
        }
    };

    return (
        <ul>
            {items.map((item) => (
                <ShopItem
                    key={item.name}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default ShopList;