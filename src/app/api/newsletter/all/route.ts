import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

export async function GET() {
  try {
    await connectDB();

    const data = await Newsletter.find();

    return NextResponse.json(data);
  } catch (err) {
    console.log(err); // ✅ use it
    return NextResponse.json({ success: false, message: "Server Error" });
  }
}