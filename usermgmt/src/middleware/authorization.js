import { authenticate } from "./authentication";

export const checkRole = (role) => {
  return (req, res, next) => {
    const { user } = req;
    if (user && user.role === role) {
      next(); // User has the required role, continue
    } else {
      res.status(403).json({ message: "Forbidden" }); // User doesn't have the required role
    }
  };
};
