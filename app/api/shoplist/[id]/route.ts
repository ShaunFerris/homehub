import ShoplistItem from "@/models/shoplist";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { isUnauthorized } from "@/utils/session";

export const DELETE = async (req: Request, { params }) => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

  try {
    await connectToDB();

    await ShoplistItem.findByIdAndRemove(params.id);

    return NextResponse.json("Item deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json(`Item delete failed: ${error}`, {
      status: 500
    });
  }
};

export const PATCH = async (req: Request, { params }) => {
  const unauthorized = await isUnauthorized();
  if (unauthorized) return unauthorized;

  const { complete } = await req.json();

  try {
    await connectToDB();

    await ShoplistItem.findByIdAndUpdate(params.id, {
      complete: !complete
    });
    return NextResponse.json("Item marked complete", { status: 200 });
  } catch (error) {
    return NextResponse.json(`Mark complete failed: ${error}`, {
      status: 500
    });
  }
};
