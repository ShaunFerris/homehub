import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";

export const GET = async (req) => {
  try {
    console.log(req.url);
    await connectToDB();
    const budgets = await Budget.find({});
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch budgets", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    console.log(req.url);
    await connectToDB();
    await Budget.deleteMany({});
    return new Response("Deleted all budgets", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete all budgets", {
      status: 500
    });
  }
};
