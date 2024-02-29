import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export async function isUnauthorized() {
  const session = await getCurrentUser();
  if (!session) {
    return NextResponse.json("unauthorized", { status: 401 });
  } else return null;
}
