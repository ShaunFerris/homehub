import ShoplistItem from "@/models/shoplist";
import { connectToDB } from "@/utils/database";
import { isUnauthorized } from "@/utils/session";

export const GET = async () => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

  try {
    await connectToDB();

    const items = await ShoplistItem.find({}).populate("creator");

    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch shoplist", { status: 500 });
  }
};

export const DELETE = async () => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

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
