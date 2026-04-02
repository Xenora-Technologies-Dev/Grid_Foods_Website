/**
 * Netlify Serverless Function: contact.js
 * Handles POST requests from the contact form and sends email via Nodemailer.
 *
 * Required Environment Variables (set in Netlify Dashboard → Site Settings → Environment Variables):
 *   SMTP_HOST    — e.g. smtp.gmail.com
 *   SMTP_PORT    — e.g. 587
 *   SMTP_USER    — Your sending Gmail address
 *   SMTP_PASS    — Gmail App Password (not your account password)
 *   CONTACT_EMAIL — Recipient email (xenoratechnologies@gmail.com)
 */

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // Parse body safely
  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON body' }),
    };
  }

  const { name, email, phone, company, message } = data;

  // Basic input validation
  if (!name || !email || !phone || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields: name, email, phone, message' }),
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid email address' }),
    };
  }

  // Sanitize inputs — strip HTML tags to prevent injection
  const sanitize = (str) => String(str).replace(/<[^>]*>/g, '').trim().slice(0, 1000);

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeCompany = sanitize(company || 'Not provided');
  const safeMessage = sanitize(message);

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipientEmail = process.env.CONTACT_EMAIL || 'xenoratechnologies@gmail.com';

  const mailOptions = {
    from: `"Grid Foods Website" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    replyTo: safeEmail,
    subject: `New Inquiry from ${safeName} — Grid Foods LLC`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0a1628; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #f97316; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          <p style="color: #ffffff99; margin: 4px 0 0; font-size: 13px;">Grid Foods LLC Website</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #f97316;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone / WhatsApp</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; line-height: 1.6;">${safeMessage.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
        <div style="background: #0a1628; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #ffffff60; font-size: 12px; margin: 0;">This email was sent from the Grid Foods LLC website contact form.</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission — Grid Foods LLC

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Company: ${safeCompany}

Message:
${safeMessage}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Failed to send email. Please try again later.' }),
    };
  }
};
