import { NextResponse } from "next/server";
import { User } from "@/lib/models";
import connectDB from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export const GET = async (request) => {
  try {
    await connectDB();

    const params = new URL(request.url);

    const currentPage = parseInt(params.searchParams.get("page")) || 1;
    const ITEM_PER_PAGE = 2;
    const skip = (currentPage - 1) * ITEM_PER_PAGE;

    const count = await User.find().count();

    const users = await User.find().limit(ITEM_PER_PAGE).skip(skip);

    return NextResponse.json({ data: users, count: count });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something Error!" });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();
    const body = await request.json();
    const user = await User.create(body);
    return NextResponse.json({ data: user });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something Error!" });
  }
};
