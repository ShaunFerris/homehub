import ShopItem from "./ShopItem";

const ShopList = () => {
    const itemsToDisplay = [
        {name:"placeholder item", complete: false, creator: "Shaun"}
    ]

    return (
        <ul>
            {itemsToDisplay.map((item) => (
                <ShopItem
                    key={item.name}
                    item={item}
                />
            ))}
        </ul>
    );
};

export default ShopList;