import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: String,
  city: String,
  state: String,
  pincode: String,
  photo: String, // Store the filename of the user's profile picture
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

// Hash the password before saving to the database
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model("User", userSchema);
