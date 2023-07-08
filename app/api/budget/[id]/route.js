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

export const PATCH = async (req, { params }) => {
    const { name, budget, expenses } = await req.json();
    try {
        await connectToDB();

        await Budget.findByIdAndUpdate(
            params.id,
            {
                name: name,
                budget: budget,
                expenses: expenses
            }
        );
        return new Response("Budget data updated", { status: 200 });
    } catch (error) {
        return new Response("Budget update failed", { status: 500 });
    }
};