import Budget from "@/models/budget";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { IBudgetDocument } from "@/types/models";
import { isUnauthorized } from "@/utils/session";

export const POST = async (req: Request) => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

  const { name, budgetAmount, expenseList } = await req.json();

  try {
    await connectToDB();
    const newBudget: IBudgetDocument = new Budget({
      name: name,
      budget: budgetAmount,
      expenses: expenseList
    });
    await newBudget.save();
    return NextResponse.json(newBudget, { status: 201 });
  } catch (error) {
    return NextResponse.json(`Failed to create a new budget: ${error}`, {
      status: 500
    });
  }
};
