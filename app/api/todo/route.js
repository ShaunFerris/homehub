import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const GET = async (req) => {
    try {
        await connectToDB();

        const tasks = await Todo.find({});

        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch todo tasks", { status: 500 });
    }
};