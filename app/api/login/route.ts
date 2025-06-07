import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    await dbConnect();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Invalid email" }, { status: 404 });
    }

    // Fake password match for now (not secure; replace with bcrypt)
    if (password !== "123456") {
      return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user });
  } catch (error) {
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
