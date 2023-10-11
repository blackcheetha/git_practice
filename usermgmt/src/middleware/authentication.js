import jwt from "jsonwebtoken";
import { checkTokenValidity } from "../utils/tokenUtils.js";

export const authenticate = (req, res, next) => {
  // Implement JWT verification here, and if the token is valid, set user information in the request.
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from the request headers
  if (!checkTokenValidity(token)) {
    return res.status(401).json({ message: "Token is invalid or expired" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken; // Attach user information to the request
    next(); // Continue with the next middleware or route
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};
