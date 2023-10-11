const express = require("express");
const { authenticate } = require("../middleware/authentication");
const { checkRole } = require("../middleware/authorization");

const router = express.Router();

// Example route requiring authentication
router.get("/secure-route", authenticate, (req, res) => {
  res.json({ message: "This is a secure route" });
});

// Example route requiring authorization for specific roles
router.get("/admin-only", authenticate, checkRole("admin"), (req, res) => {
  res.json({ message: "This is an admin-only route" });
});

router.get("/manager-only", authenticate, checkRole("manager"), (req, res) => {
  res.json({ message: "This is a manager-only route" });
});

router.get("/support-only", authenticate, checkRole("support"), (req, res) => {
  res.json({ message: "This is a support-only route" });
});

router.get(
  "/reseller-only",
  authenticate,
  checkRole("reseller"),
  (req, res) => {
    res.json({ message: "This is a reseller-only route" });
  }
);

router.get(
  "/customer-only",
  authenticate,
  checkRole("customer"),
  (req, res) => {
    res.json({ message: "This is a customer-only route" });
  }
);

module.exports = router;
