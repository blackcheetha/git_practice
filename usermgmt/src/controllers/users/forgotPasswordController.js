import crypto from "crypto";
import User from "../../models/User.js";
import { sendPasswordResetEmail } from "../../utils/emailTemplates/sendPasswordResetEmail";


// Forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Generate a unique password reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

    // Save the user with the reset token and expiration time
    await user.save();

    // Send a password reset email to the user
    await sendPasswordResetEmail(user, resetToken);

    res.json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Forgot password failed" });
  }
};
export { forgotPassword };