import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";
import { NextResponse } from "next/server";
import { IBudgetDocument } from "@/types/models";
import { getCurrentUser } from "@/utils/session";

export const GET = async (req: Request) => {
  const session = await getCurrentUser();
  if (!session) {
    return NextResponse.json("unauthorized", { status: 401 });
  }
  try {
    await connectToDB();
    const budgets: IBudgetDocument[] | [] = await Budget.find({});
    return NextResponse.json(budgets, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Failed to fetch budgets: ${error}`, {
      status: 500
    });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await connectToDB();
    await Budget.deleteMany({});
    return NextResponse.json("Deleted all budgets", { status: 200 });
  } catch (error) {
    return NextResponse.json(`Failed to delete all budgets: ${error}`, {
      status: 500
    });
  }
};
