import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Budget from "@/models/budget";
import { IBudgetDocument } from "@/types/models";

export const GET = async (req: Request, { params }) => {
  try {
    await connectToDB();
    const data: IBudgetDocument = await Budget.findById(params.id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Failed to fetch budget: ${error}`, {
      status: 500
    });
  }
};

export const PATCH = async (req: Request, { params }) => {
  const { name, budget, expenses } = await req.json();

  try {
    await connectToDB();
    await Budget.findByIdAndUpdate(params.id, {
      name: name,
      budget: budget,
      expenses: expenses
    });
    return NextResponse.json("Budget data updated", { status: 200 });
  } catch (error) {
    return NextResponse.json(`Budget update failed: ${error}`, {
      status: 500
    });
  }
};
