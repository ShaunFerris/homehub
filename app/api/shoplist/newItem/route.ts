import ShoplistItem from "@/models/shoplist";
import { connectToDB } from "@/utils/database";
import { isUnauthorized } from "@/utils/session";

export const POST = async (req: Request) => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

  const { item, complete, userID } = await req.json();

  try {
    await connectToDB();

    const newItem = new ShoplistItem({
      creator: userID,
      name: item,
      complete: complete
    });

    await newItem.save();
    return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (error) {
    return new Response("Failed to add shoplist item", {
      status: 500
    });
  }
};
