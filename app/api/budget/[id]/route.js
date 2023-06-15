import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const data = await Budget.findById(params.id);
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch budget", { status: 500 });
    }
};