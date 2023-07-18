import { useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { ShoplistContext } from "@/context/ShoplistContext";

const ShopAddItem = () => {
  const { data: session } = useSession();
  const [item, setItem] = useState({ name: "", complete: false });
  const { setHasUpdated } = useContext(ShoplistContext);

  const createShopItem = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("api/shoplist/newItem/", {
        method: "POST",
        body: JSON.stringify({
          item: item.name,
          complete: item.complete,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        console.log("Created a shopping list item");
        setItem({ name: "", complete: false });
        setHasUpdated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex flex-row gap-4"
      onSubmit={createShopItem}
    >
      <input
        className="form_input border border-black"
        placeholder="Add an item to your shopping list..."
        value={item.name}
        onChange={(event) =>
          setItem({
            ...item,
            name: event.target.value,
          })
        }
      />
      <button className="black_btn">Add</button>
    </form>
  );
};

export default ShopAddItem;
