const User = require("../models/User");
const Dataset = require("../models/Dataset");
const Feedback = require("../models/Feedback");
const Country = require("../models/Country");
const DashboardSnapshot = require("../models/DashboardSnapshot");

const getDashboardData = async () => {
  const [totalUsers, totalDatasets, totalFeedbacks, totalCountries, recentDatasets, recentFeedbacks] =
    await Promise.all([
      User.countDocuments(),
      Dataset.countDocuments(),
      Feedback.countDocuments(),
      Country.countDocuments(),
      Dataset.find().sort({ createdAt: -1 }).limit(5).select("name rowCount createdAt"),
      Feedback.find().sort({ createdAt: -1 }).limit(5).select("message category createdAt")
    ]);

  const snapshot = await DashboardSnapshot.create({
    totalUsers,
    totalDatasets,
    totalFeedbacks,
    totalCountries,
    lastGeneratedAt: new Date()
  });

  return {
    summary: {
      totalUsers,
      totalDatasets,
      totalFeedbacks,
      totalCountries
    },
    recentDatasets,
    recentFeedbacks,
    snapshot
  };
};

module.exports = {
  getDashboardData
};
