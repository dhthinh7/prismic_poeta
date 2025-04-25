'use server'

import nodemailer from 'nodemailer'
import { IEmailSender } from '../model/mail.type'

const mailServer = process.env.NEXT_PUBLIC_MAIL_SERVER
const mailServerPassword = process.env.NEXT_PUBLIC_MAIL_SERVER_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: mailServer,
    pass: mailServerPassword
  }
})

export async function sendMail({ from, to, subject, html }: IEmailSender) {
  try {
    const isVerified = await transporter.verify()
    if (!isVerified) return
    // `${process.env.NEXT_PUBLIC_MAIL_SERVER_NAME} <${process.env.NEXT_PUBLIC_MAIL_SERVER}>`
    to.forEach(async (t) => {
      await transporter.sendMail({
        from,
        to: t,
        subject,
        html
      })
    })
  } catch (error) {
    console.error('Something Went Wrong', error)
    return
  }
}
