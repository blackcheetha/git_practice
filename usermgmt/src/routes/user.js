import express from "express";
import { authenticate } from "../middleware/authentication.js";
import { upload } from "../utils/fileUpload.js"; // Import Multer configurations
import { updateProfile } from "../controllers/users/updateProfileController.js";
import { changePassword } from "../controllers/users/changePasswordController.js";
import { deleteAccount } from "../controllers/users/deleteAccountController.js";
import { activateUser } from "../controllers/users/activateUserController.js";
import { deactivateUser } from "../controllers/users/deactivateUserController.js";

const router = express.Router();

// Route for updating a user's profile
router.put(
  "/update-profile",
  authenticate,
  upload.single("photo"),
  updateProfile
);

// Route for changing the password
router.put("/change-password", authenticate, changePassword);

// Route for deleting the account
router.delete("/delete-account", authenticate, deleteAccount);

// Route to activate a user
router.put("/activate/:userId", authenticate, activateUser);

// Route to deactivate a user
router.put("/deactivate/:userId", authenticate, deactivateUser);

export default router;
