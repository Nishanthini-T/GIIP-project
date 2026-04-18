const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateRequired, validateEmail } = require("../middleware/validationMiddleware");
const { authGuard } = require("../middleware/authMiddleware"); // 👈 add this
const { getProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/register", validateRequired(["name", "email", "password"]), validateEmail, register);
router.post("/login", validateRequired(["email", "password"]), validateEmail, login);

// 👇 add this route
router.get("/profile", authGuard, (req, res) => {
  res.json({
    message: "Profile fetched successfully",
    user: req.user
  });
});

module.exports = router;