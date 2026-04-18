const asyncHandler = require("../middleware/asyncHandler");
const { getDashboardData } = require("../services/dashboardService");

const getDashboardSummary = asyncHandler(async (req, res) => {
  const data = await getDashboardData();
  res.status(200).json(data);
});

module.exports = {
  getDashboardSummary
};
