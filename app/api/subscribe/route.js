import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the email from the request body
    const { email } = await request.json();

    // Create transporter using environment variables (recommended for production)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send a subscription confirmation email to the user
    await transporter.sendMail({
      from: `"WireBridger" <${process.env.EMAIL_USER}>`,
      to: email, // send confirmation TO the subscriber
      subject: "Thank you for subscribing!",
      html: `
        <p>Hi there,</p>
        <p>Thank you for subscribing to our newsletter. We'll keep you updated with the latest news!</p>
        <p>- The WireBridger Team</p>
      `,
    });

    // If needed, you can also send an email to yourself (site owner) to notify of a new subscriber:

    await transporter.sendMail({
      from: `"WireBridger" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // or another admin email
      subject: "New Newsletter Subscription",
      html: `<p>${email} just subscribed to the newsletter.</p>`,
    });

    // Respond with success
    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending subscription email:", error);
    return NextResponse.json(
      {
        message: "There was an error subscribing. Please try again later.",
      },
      { status: 500 }
    );
  }
}
