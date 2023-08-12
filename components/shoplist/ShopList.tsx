import ShopItem from "./ShopItem";
import Loader from "../Loader";
import { useState, useEffect, useContext } from "react";
import { ShoplistContext } from "@/context/ShoplistContext";
import { IShopListItem } from "@/types";

const ShopList = () => {
  const [items, setItems] = useState<IShopListItem[] | null>(null);
  const { hasUpdated, setHasUpdated } = useContext(ShoplistContext);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await fetch("api/shoplist");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Failed to fetch shoppinglist: ", error);
      }
    };
    if (hasUpdated) {
      fetchListItems();
      setHasUpdated(false);
    }
  }, [hasUpdated, setHasUpdated]);

  const handleDelete = async (item) => {
    try {
      const response = await fetch(
        `api/shoplist/${item._id.toString()}`,
        {
          method: "DELETE"
        }
      );
      setHasUpdated(true);
      if (response.ok) {
        console.log("Deleted one item!");
      }
    } catch (error) {
      console.log("Failed to delete item: ", error);
    }
  };

  const handleStatusChange = async (item) => {
    try {
      const response = await fetch(
        `api/shoplist/${item._id.toString()}`,
        {
          method: "PATCH",
          body: JSON.stringify({ ...item })
        }
      );
      setHasUpdated(true);
      if (response.ok) {
        console.log("Marked one item as complete!");
      }
    } catch (error) {
      console.log("Failed to mark item complete: ", error);
    }
  };

  const handleClear = async () => {
    const hasConfirmed = confirm(
      "Are you sure that you wish to clear all list items?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch("api/shoplist", {
          method: "DELETE"
        });
        setHasUpdated(true);
        if (response.ok) {
          console.log("Successfully cleared list!");
        }
      } catch (error) {
        console.log("Failed to clear list: ", error);
      }
    }
  };

  return (
    <div>
      <ul data-test="shoplist-list" className="mt-4">
        {items === null ? (
          <Loader />
        ) : (
          items.map((item) => (
            <ShopItem
              key={item.name}
              item={item}
              handleDelete={handleDelete}
              handleStatusChange={handleStatusChange}
            />
          ))
        )}
      </ul>
      <button
        data-test="shoplist-clear"
        className="delete_btn w-full mt-4"
        onClick={handleClear}
      >
        Clear shopping list
      </button>
    </div>
  );
};

export default ShopList;
