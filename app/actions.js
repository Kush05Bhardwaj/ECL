'use server'

import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

export async function submitContactForm(formData) {
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set in environment variables')
    return { success: false, error: 'Server configuration error. Please try again later.' }
  }

  const resend = new Resend(resendApiKey)

  const name = String(formData.get('name'))
  const company = String(formData.get('company') || 'N/A')
  const email = String(formData.get('email'))
  const phone = String(formData.get('phone') || 'N/A')
  const orders = String(formData.get('orders') || 'N/A')
  const message = String(formData.get('message'))

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ravi@eclparcel.in',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone Number: ${phone}
        Orders Per Month: ${orders}
        Message: ${message}
      `.trim(),
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
