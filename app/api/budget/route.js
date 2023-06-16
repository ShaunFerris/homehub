import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";

export const GET = async () => {
    try {
        await connectToDB();
        const budgets = await Budget.find({});
        return new Response(JSON.stringify(budgets), { status: 200 });
        
    } catch (error) {
        return new Response("Failed to fetch budgets", { status: 500 });
    }
};