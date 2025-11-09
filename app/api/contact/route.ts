import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // TODO: implement zod validation, rate limiting and Resend email
  return NextResponse.json({ success: false, message: "Not implemented yet" }, { status: 501 });
}
