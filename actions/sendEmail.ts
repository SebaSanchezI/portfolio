'use server'
import { validateString } from '@/lib/utils'
import { ContactFormEmailTemplate } from '@/emails/contactForm'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail (formData: FormData) {
  const senderEmail = formData.get('senderEmail') as string
  const bodyEmail = formData.get('bodyEmail') as string

  if(!validateString(senderEmail, 100)) {
    return {
      status: 'error',
      message: 'Invalid sender emial'
    }
  }

  if(!validateString(bodyEmail, 2000)) {
    return {
      status: 'error',
      message: 'Invalid message.'
    }
  }

  try {
    const { data, error } = await resend.emails.send({
      // from: `Contact form <${senderEmail}>`,
      from: 'Contact form <onboarding@resend.dev>',
      to: ['sebastian.sanchezisame@outlook.com'],
      subject: 'Thank you',
      reply_to: senderEmail,
      react: ContactFormEmailTemplate ({ message: bodyEmail, senderEmail }),
    })

    if (error) {
      return {
        status: 'error',
        message: error.message
      }
    }

    return {
      status: 'success',
      message: 'Email sent successfully'
    }

  } catch (error: unknown) {
    return {
      status: 'error',
      message: error
    }
  }
}