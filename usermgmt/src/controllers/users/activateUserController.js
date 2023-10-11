import User from "../../models/User.js";
// Activate a user
const activateUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "active"; // Set the user's status to 'active'
    await user.save();

    res.json({ message: "User activated successfully" });
  } catch (error) {
    res.status(500).json({ message: "User activation failed" });
  }
};
export { activateUser };