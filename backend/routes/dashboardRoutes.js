const express = require("express");
const { getDashboardSummary } = require("../controllers/dashboardController");
const { authGuard } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authGuard, getDashboardSummary);

module.exports = router;
