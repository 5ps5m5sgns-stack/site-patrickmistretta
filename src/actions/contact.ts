'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(5000),
})

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Veuillez corriger les erreurs ci-dessous.',
      errors: parsed.error.flatten().fieldErrors as ContactState['errors'],
    }
  }

  const { name, email, subject, message } = parsed.data

  if (!process.env.RESEND_API_KEY) {
    return {
      status: 'error',
      message: 'Configuration manquante. Veuillez écrire directement à contact@patrickmistretta.fr',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Site web <onboarding@resend.dev>',
    to: ['contact@patrickmistretta.fr'],
    reply_to: email,
    subject: subject ? `[Site] ${subject}` : `[Site] Message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#12102A">Nouveau message depuis patrickmistretta.fr</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:80px">Nom</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          ${subject ? `<tr><td style="padding:8px 0;color:#666">Sujet</td><td style="padding:8px 0">${subject}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #E8E3D8;margin:16px 0"/>
        <div style="white-space:pre-wrap;line-height:1.7;color:#2A2A3A">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      </div>
    `,
  })

  if (error) {
    return {
      status: 'error',
      message: 'Une erreur est survenue. Veuillez écrire directement à contact@patrickmistretta.fr',
    }
  }

  return {
    status: 'success',
    message: 'Votre message a bien été envoyé. Vous recevrez une réponse dans les meilleurs délais.',
  }
}
