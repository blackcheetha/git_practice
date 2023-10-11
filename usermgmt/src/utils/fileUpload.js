// utils/fileUpload.js
import multer from "multer";
import path from "path";

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    return cb(null, true);
  } else {
    return cb(new Error("Invalid file type"), false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Define the file name and extension
  },
});

const upload = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 1024 * 1024 }, // 1 MB limit
});

export { upload };
