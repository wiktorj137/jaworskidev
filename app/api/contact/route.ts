import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from the contact API!" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Here you would typically handle the contact form data,
    // e.g., send an email, save to a database, etc.
    console.log("Received contact form submission:", body);

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "An error occurred while sending your message." },
      { status: 500 }
    );
  }
}
