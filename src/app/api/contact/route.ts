import { NextResponse } from "next/server";

// Dynamic import to ensure server-side only
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST as string;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER as string; // your email
    const smtpPass = process.env.SMTP_PASS as string; // app password or real pass
    const toEmail = process.env.TO_EMAIL || smtpUser; // where to receive

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ ok: false, error: "SMTP env not set" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const html = `
      <h2>New Project Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Subject:</b> ${subject || "-"}</p>
      <p><b>Message:</b></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `Aero Contact <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: subject || "New contact submission",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


