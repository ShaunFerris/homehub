import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, budgetAmount, expenseList } = await req.json();

  try {
    await connectToDB();
    const newBudget = new Budget({
      name: name,
      budget: budgetAmount,
      expenses: expenseList
    });
    await newBudget.save();
    return NextResponse.json(newBudget, { status: 201 });
  } catch (error) {
    return NextResponse.json("Failed to create a new budget", {
      status: 500
    });
  }
};
