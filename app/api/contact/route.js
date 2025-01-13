import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // 1. Parse form data from request body
    const { name, email, message } = await request.json();

    // 2. Create Nodemailer transporter (retrieve all from env)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // If using SSL (port 465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Define the email options
    await transporter.sendMail({
      from: `"WireBridger Website" <info@wirebridger.com>`,
      replyTo: email, // Allows you to reply to the user's email directly
      to: "info@wirebridger.com",
      subject: "New Contact Form Submission",
      html: `
          <h3>You have a new contact form submission:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    });

    // 4. Respond with success
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message:
          "There was an error sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
