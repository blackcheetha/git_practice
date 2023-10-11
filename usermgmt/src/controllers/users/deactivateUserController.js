import User from "../../models/User.js";
// Deactivate a user
const deactivateUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "inactive"; // Set the user's status to 'inactive'
    await user.save();

    res.json({ message: "User deactivated successfully" });
  } catch (error) {
    res.status(500).json({ message: "User deactivation failed" });
  }
};
export { deactivateUser };