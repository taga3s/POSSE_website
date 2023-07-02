// @see https://kakkoyakakko2.hatenablog.com/entry/2019/11/21/003000
import nodemailer from 'nodemailer'
import { customLogger } from './logger.js'
export const sendEmail = async (email, token) => {
  const mail_content = {
    from: 'mameshiba@example.com',
    to: email,
    subject: 'POSSEアプリに招待されています',
    text: 'POSSEアプリに招待されています',
    html: `<p>こちらから登録してください</p><a>http://localhost:5173/signup?token=${token}&email=${email}</a>`,
  }
  const options = {
    host: '127.0.0.1',
    port: 1025,
    secure: false,
    requireTLS: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: 'admin',
      pass: 'password',
    },
  }
  try {
    const transport = nodemailer.createTransport(options)
    const result = await transport.sendMail(mail_content)
    customLogger.debug(result)
  } catch (e) {
    customLogger.error(e)
  }
}
