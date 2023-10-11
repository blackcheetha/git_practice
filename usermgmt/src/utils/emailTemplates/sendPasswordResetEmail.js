//utils/emailTemplates/sendPasswordResetEmail.js

// Function to send a password reset email
const sendPasswordResetEmail = (user, resetToken) => {
  const resetLink = `https://your-website.com/reset-password/${resetToken}`;

  const html = `Click this <a href="${resetLink}">link</a> to reset your password.`;

  return sendEmail(user.email, "Password Reset", html);
};
