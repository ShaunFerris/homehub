import { connectToDB } from "@/utils/database";
import Budget from "@/models/budget";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const budgets = await Budget.find({});
    return NextResponse.json(budgets, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch budgets", {
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
    return NextResponse.json("Failed to delete all budgets", {
      status: 500
    });
  }
};
