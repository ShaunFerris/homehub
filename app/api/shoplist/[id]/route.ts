import { connectToDB } from "@/utils/database";
import ShoplistItem from "@/models/shoplist";

export const DELETE = async (req: Request, { params }) => {
  try {
    await connectToDB();

    await ShoplistItem.findByIdAndRemove(params.id);

    return new Response("Item deleted", { status: 200 });
  } catch (error) {
    return new Response("Item delete failed", { status: 500 });
  }
};

export const PATCH = async (req: Request, { params }) => {
  const { complete } = await req.json();

  try {
    await connectToDB();

    await ShoplistItem.findByIdAndUpdate(params.id, {
      complete: !complete
    });
    return new Response("Item marked complete", { status: 200 });
  } catch (error) {
    return new Response("Mark complete failed", { status: 500 });
  }
};
