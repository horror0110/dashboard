import { NextResponse } from "next/server";
import { Product } from "@/lib/models";
import connectDB from "@/lib/utils";

export const GET = async (request) => {
  try {
    await connectDB();

    const params = new URL(request.url);

    const currentPage = parseInt(params.searchParams.get("page")) || 1;
    const ITEM_PER_PAGE = 2;
    const skip = (currentPage - 1) * ITEM_PER_PAGE;

    const count = await Product.find().count();

    const products = await Product.find().limit(ITEM_PER_PAGE).skip(skip);

    return NextResponse.json({ data: products, count: count });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something Error!" });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();
    const body = await request.json();
    const product = await Product.create(body);
    return NextResponse.json({ data: product });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something Error!" });
  }
};
