import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import dotenv from 'dotenv';

const { readFile } = fs;
dotenv.config();

const sendMail = async (mailType: string, email: string) => {
  try {
    let html = '';
    if (mailType === 'welcome') {
      html = await readFile('./src/utils/mailHtml/welcome-mail.html', 'utf8');
    } else if ('appointment') {
      html = await readFile('./src/utils/mailHtml/appointment-mail.html', 'utf8');
    }
    
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      port: 465,
      secure: false,
      requireTLS: true,
      auth: {
        type: 'login',
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, // sender address
      to: email, // list of receivers
      subject: 'Welcome To AloDoc', // Subject line
      html,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default sendMail;
