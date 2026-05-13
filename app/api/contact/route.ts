import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "SMTP credentials are not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      tls: { ciphers: "SSLv3" },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5;">
        <h2 style="margin: 0 0 16px;">New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; width: 140px;">Name</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Email</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Phone</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(phone || "N/A")}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Message</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@solarstarenergy.ca",
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send message.";

    const smtpAuthDisabled =
      message.includes("SmtpClientAuthentication is disabled") ||
      message.includes("smtp_auth_disabled") ||
      /535\s+5\.7\.139/i.test(message);

    if (smtpAuthDisabled) {
      return NextResponse.json(
        {
          error:
            "Email could not be sent because SMTP authentication is disabled for your Microsoft 365 organization. A Microsoft 365 admin must enable SMTP AUTH for the tenant or this mailbox (see https://aka.ms/smtp_auth_disabled).",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
