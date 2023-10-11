import User from "../../models/User.js";

// Delete account
const deleteAccount = async (req, res) => {
  const user = req.user; // This is the authenticated user from the JWT token
  const { password } = req.body;

  try {
    // Check if the provided password matches the user's stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    // Perform any additional cleanup or data removal associated with account deletion
    // For example, you may want to delete related data, logs, or any other user-specific content

    // Delete the user's account from the database
    await user.remove();

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Account deletion failed" });
  }
};
export { deleteAccount };