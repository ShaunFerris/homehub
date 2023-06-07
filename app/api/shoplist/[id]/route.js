import { connectToDB } from "@/utils/database";
import ShoplistItem from "@/models/shoplist";

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        await ShoplistItem.findByIdAndRemove(params.id);

        return new Response("Item deleted", { status: 200 });
    } catch (error) {
        return new Response("Item delete failed", { status: 500 });
    }
};