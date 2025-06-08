import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/User';
import connectDB from '@/lib/mongodb'; // ✅ FIXED: Changed named import to default import
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // ✅ use connectDB (default import)
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
