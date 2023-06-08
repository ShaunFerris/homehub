import { TiDelete } from "react-icons/ti";

const ShopItem = ({ item, handleDelete }) => {
    const repComplete = item.complete ?
        "bg-green-500 line-through" : "bg-white";

    return (
        <li className={`flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500 ${repComplete}`}>
            <div>
                {item.name}
            </div>
            <TiDelete size="1.5em" onClick={(e) => {
                e.preventDefault();
                handleDelete(item);
            }} />
        </li>
    );
};

export default ShopItem;