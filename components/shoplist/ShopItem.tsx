import { TiDelete, TiTick } from "react-icons/ti";

const ShopItem = ({ item, handleDelete, handleStatusChange }) => {
  const repComplete = item.complete
    ? "bg-green-500 line-through"
    : "bg-white";

  return (
    <li
      data-test="shoplist-item"
      className={`flex flex-row justify-between items-center px-5
        p-2 border border-gray-500 rounded-lg mt-2 ${repComplete}`}
    >
      <div>{item.name}</div>
      <div
        className="flex flex-row justify-between items-center
            gap-4"
      >
        {!item.complete ? (
          <TiTick
            data-test="shoplist-markComplete"
            size="1.5em"
            onClick={() => {
              handleStatusChange(item);
            }}
          />
        ) : (
          <></>
        )}
        <TiDelete
          size="1.5em"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(item);
          }}
        />
      </div>
    </li>
  );
};

export default ShopItem;
