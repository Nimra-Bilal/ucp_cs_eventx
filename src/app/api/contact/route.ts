import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await connectDB();

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.log(error); // ✅ now used
    return NextResponse.json({ success: false, message: "Server Error" });
  }
}