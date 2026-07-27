import { Resend } from "resend";
import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function asTrimmedString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  // Honeypot: bots that fill hidden fields are silently accepted
  if (asTrimmedString(payload.website, 200)) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[contact] honeypot acionado — e-mail NÃO enviado");
    }
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(payload.name, 120);
  const email = asTrimmedString(payload.email, 160).toLowerCase();
  const subject = asTrimmedString(payload.subject, 160);
  const message = asTrimmedString(payload.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e mensagem." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado." },
      { status: 503 },
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const mailSubject = subject
    ? `Contato portfolio: ${subject}`
    : `Contato portfolio: ${name}`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: mailSubject,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        subject ? `Assunto: ${subject}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      const isDev = process.env.NODE_ENV === "development";
      return NextResponse.json(
        {
          error: isDev
            ? `Resend: ${error.message}`
            : "Não foi possível enviar a mensagem.",
        },
        { status: 502 },
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.info("[contact] email enviado:", data?.id, "→", to);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem." },
      { status: 502 },
    );
  }
}
