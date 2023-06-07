import { TiDelete } from "react-icons/ti";

const ShopItem = ({ item, handleDelete }) => {
    return (
        <li className='flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500'>
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