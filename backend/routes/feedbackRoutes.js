const express = require("express");
const { addFeedback, getFeedback } = require("../controllers/feedbackController");
const { authGuard } = require("../middleware/authMiddleware");
const { validateRequired } = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/", authGuard, validateRequired(["message"]), addFeedback);
router.get("/", authGuard, getFeedback);

module.exports = router;
