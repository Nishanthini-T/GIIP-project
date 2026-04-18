const mongoose = require("mongoose");

const dashboardSnapshotSchema = new mongoose.Schema(
  {
    totalUsers: {
      type: Number,
      default: 0
    },
    totalDatasets: {
      type: Number,
      default: 0
    },
    totalFeedbacks: {
      type: Number,
      default: 0
    },
    totalCountries: {
      type: Number,
      default: 0
    },
    lastGeneratedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("DashboardSnapshot", dashboardSnapshotSchema);
