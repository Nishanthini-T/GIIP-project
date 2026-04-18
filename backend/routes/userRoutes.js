const express = require("express");
const { getProfile } = require("../controllers/userController");
const { authGuard } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", authGuard, getProfile);
const { getAllUsers } = require("../controllers/userController");

router.get("/", authGuard, getAllUsers);
module.exports = router;
