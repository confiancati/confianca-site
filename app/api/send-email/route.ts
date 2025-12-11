import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, city, activity, contactPreference } = await request.json()

    // Validação dos dados
    if (!name || !email || !phone || !city || !activity || !contactPreference) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 },
      )
    }

    // Configuração do transporter SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email para o cliente
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Obrigado pelo seu interesse!</h1>
        </div>
        <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px;">Olá <strong>${name}</strong>,</p>
          <p style="color: #555; font-size: 14px; line-height: 1.6;">
            Recebemos sua solicitação de contato com sucesso! Em breve, a Contabilidade Confiança 
            entrará em contato com você via <strong>${contactPreference}</strong>.
          </p>
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;">
            <p style="color: #333; font-size: 14px; margin: 8px 0;"><strong>Informações da sua solicitação:</strong></p>
            <p style="color: #666; font-size: 13px; margin: 8px 0;">
              <strong>Email:</strong> ${email}<br>
              <strong>Celular:</strong> ${phone}<br>
              <strong>Cidade:</strong> ${city}<br>
              <strong>Atividade:</strong> ${activity}<br>
              <strong>Preferência de contato:</strong> ${contactPreference}
            </p>
          </div>
          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            Nosso horário de funcionamento é de segunda à sexta, das 9h às 18h (horário de Brasília).
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
            Este é um email automático. Por favor, não responda a este endereço.
          </p>
        </div>
      </div>
    `

    // Email para o administrador
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Nova Solicitação de Contato</h1>
        </div>
        <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px;"><strong>Novo contato recebido:</strong></p>
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Nome:</strong> ${name}
            </p>
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Celular:</strong> ${phone}
            </p>
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Cidade:</strong> ${city}
            </p>
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Atividade:</strong> ${activity}
            </p>
            <p style="color: #333; font-size: 14px; margin: 10px 0;">
              <strong>Preferência de contato:</strong> ${contactPreference}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
            Data/Hora: ${new Date().toLocaleString("pt-BR")}
          </p>
        </div>
      </div>
    `

    // Enviar email para o cliente
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Recebemos sua solicitação de contato",
      html: clientEmailHtml,
    })

    // Enviar email para o administrador
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "cristiane@contabconfianca.com.br",
      subject: `Nova solicitação de contato - ${name}`,
      html: adminEmailHtml,
    })

    return NextResponse.json(
      { message: "Emails enviados com sucesso" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { error: "Erro ao enviar email. Tente novamente mais tarde." },
      { status: 500 },
    )
  }
}
