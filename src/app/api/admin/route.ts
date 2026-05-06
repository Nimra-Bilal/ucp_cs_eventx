import Newsletter from "@/models/Newsletter";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await Newsletter.find();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err); // ✅ now used
    return NextResponse.json({ message: "Error fetching data" });
  }
}