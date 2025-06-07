// app/api/testdb/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ success: false, error: 'DB connection failed' }, { status: 500 });
  }
}
