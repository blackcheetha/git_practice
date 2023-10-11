import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js"; // Update the import statement
import authRoutes from "./src/routes/auth.js"; // Import your auth routes
import userRoutes from "./src/routes/user.js"; // Import your user routes
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Call the connectDB function to establish the MongoDB connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
