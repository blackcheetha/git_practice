import nodemailer from "nodemailer";

// Function to send an email
export const sendEmail = (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    // Configure your email service provider (e.g., Gmail, SendGrid)
    service: "your_email_service",
    auth: {
      user: "your_email",
      pass: "your_password",
    },
  });

  const mailOptions = {
    from: "your_email",
    to,
    subject,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};
