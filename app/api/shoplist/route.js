import { connectToDB } from "@/utils/database";
import ShoplistItem from "@/models/shoplist";

export const GET = async () => {
  try {
    console.log("GET req");
    await connectToDB();

    const items = await ShoplistItem.find({}).populate("creator");

    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch shoplist", { status: 500 });
  }
};

export const DELETE = async () => {
  try {
    await connectToDB();

    await ShoplistItem.deleteMany({});

    return new Response("Deleted all items", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete all items", {
      status: 500
    });
  }
};
