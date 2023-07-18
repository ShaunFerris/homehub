import Link from "next/link";
import HoverAnimateImage from "./HoverAnimateImage";

const CardMenu = () => {
  return (
    <div
      className="flex sm:flex-row flex-col justify-center
        items-center gap-4"
    >
      <div
        className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4"
      >
        <Link href="/budget">
          <h3 className="text-xl font-bold mb-2">Budget Tracker</h3>
          <HoverAnimateImage
            staticSrc="/assets/images/piggybank_still.gif"
            animatedSrc="/assets/images/piggybank_animated.gif"
            alt="piggybank"
            className="w-full h-full pb-5"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div
        className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4"
      >
        <Link href="/todo">
          <h3 className="text-xl font-bold mb-2">TODO List</h3>
          <HoverAnimateImage
            staticSrc="/assets/images/todolist_still.gif"
            animatedSrc="/assets/images/todolist_animated.gif"
            alt="todolist"
            className="w-full h-full pb-5"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div
        className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4"
      >
        <Link href="/shoplist">
          <h3 className="text-xl font-bold mb-2">Shopping List</h3>
          <HoverAnimateImage
            staticSrc="/assets/images/shopping_still.gif"
            animatedSrc="/assets/images/shopping_animated.gif"
            alt="shoppinglist"
            className="w-full h-full pb-5"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default CardMenu;
