import bcrypt from "bcrypt";

// Change password
const changePassword = async (req, res) => {
  const user = req.user; // This is the authenticated user from the JWT token
  const { currentPassword, newPassword } = req.body;

  try {
    // Check if the current password provided matches the user's stored password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Hash the new password before storing it
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedNewPassword;
    user.save();
    // Save the updated user to the database (you need to implement this part)
    // user.save().then(...) or use async/await

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Password change failed" });
  }
};
export { changePassword };