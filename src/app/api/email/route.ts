import { Inputs } from "@/components/contact/ContactForm";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = (await req.json()) as Inputs;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "guilhermelopes275@gmail.com",
      pass: process.env.NODEMAILER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "guilhermelopes275@gmail.com",
    to: "guilhermelopes275@gmail.com",
    subject: `Mensagem de ${data.name} | Email: ${data.email}`,
    text: `Mensagem: ${data.message}
            Enviado por: ${data.email}`,
    html: `<div>
    <h3>Mensagem:</h3>
    <p>${data.message}</p>
    </div>
    <h3>Enviado por:</h3>
    <p>${data.email}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    if (info) return Response.json({ info });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return new Response("Erro ao enviar mensagem", {
        status: 400,
      });
    }
  }
}
