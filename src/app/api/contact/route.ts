import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const CONTACT_EMAIL_CC = process.env.CONTACT_EMAIL_CC;

// Only initialize Resend if API key is present
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    // reCAPTCHA v3 returns a score (0.0 - 1.0), we accept 0.5 and above
    return data.success && (data.score === undefined || data.score >= 0.5);
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, recaptchaToken } = body;

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

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Format subject label
    const subjectLabels: Record<string, string> = {
      comments: "Comments",
      complaints: "Complaints",
      billing: "Billing Enquiry",
      readings: "About Readings",
      work: "Work for The Psychic Gift",
      other: "Other",
    };
    const subjectLabel = subjectLabels[subject] || subject;

    // Send email via Resend
    if (resend && CONTACT_EMAIL) {
      const { error } = await resend.emails.send({
        from: "The Psychic Gift <noreply@thepsychicgift.com>",
        to: [CONTACT_EMAIL],
        cc: CONTACT_EMAIL_CC ? [CONTACT_EMAIL_CC] : undefined,
        replyTo: email,
        subject: `Contact Form: ${subjectLabel} - The Psychic Gift`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Subject:</strong> ${subjectLabel}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
          </p>
        `,
        text: `
New Contact Form Submission

Subject: ${subjectLabel}
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "There was a problem sending your message. Please try again later." },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log submission if Resend not configured
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        phone: phone || "Not provided",
        subject: subjectLabel,
        message,
        timestamp: new Date().toISOString(),
      });
    }

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
