import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // In production, this would send an email or save to a database
    // For now, log the submission and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone: phone || "Not provided",
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g., SendGrid, Resend, or PHPMailer API)
    // TODO: Add reCAPTCHA verification
    // TODO: Save to database

    return NextResponse.json(
      { success: true, message: "Thank you for your enquiry. We will respond within 48 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "There was a problem sending your message. Please try again later." },
      { status: 500 }
    );
  }
}
