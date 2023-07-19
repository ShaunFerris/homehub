import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";

export const POST = async (req) => {
  const { name, budgetAmount, expenseList } = await req.json();

  try {
    await connectToDB();
    const newBudget = new Budget({
      name: name,
      budget: budgetAmount,
      expenses: expenseList
    });
    await newBudget.save();
    return new Response(JSON.stringify(newBudget), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new budget", {
      status: 500
    });
  }
};
