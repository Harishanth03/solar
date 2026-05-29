import { Resend } from "resend";
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
        { error: "Le nom, le courriel et le message sont obligatoires." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Le service de courriel n’est pas configuré." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5;">
        <h2 style="margin: 0 0 16px;">Nouveau message — formulaire de contact</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; width: 140px;">Nom</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Courriel</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Téléphone</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(phone || "—")}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Message</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "info@energiesolestra.ca",
      to: "info@energiesolestra.ca",
      replyTo: email,
      subject: `Nouveau message de contact — ${name}`,
      html,
    });

    if (error) {
      const errMsg =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message: unknown }).message)
          : "Échec de l’envoi du courriel.";
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Impossible d’envoyer le message.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
