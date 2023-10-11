import User from "../../models/User.js";
// Import Multer configurations

// User profile update
const updateProfile = async (req, res) => {
  // Implement profile update logic
  const user = req.user;
  const { firstName, lastName, address, city, state, pincode } = req.body;
  const photo = req.file; // Contains information about the uploaded image file

  user.firstName = firstName;
  user.lastName = lastName;
  user.address = address;
  user.city = city;
  user.state = state;
  user.pincode = pincode;

  if (photo) {
    user.photo = photo.filename; // Store the filename of the uploaded image in the user's profile
  }

  await user.save();
  res.json({ message: "Profile updated successfully" });
};

export { updateProfile };
