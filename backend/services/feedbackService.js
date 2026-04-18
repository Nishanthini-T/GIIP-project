const Feedback = require("../models/Feedback");

const createFeedback = async ({ message, category, userId }) => {
  return Feedback.create({
    message,
    category: category || "general",
    createdBy: userId
  });
};

const getAllFeedback = async () => {
  return await Feedback.find()
    .populate("createdBy", "name email"); // 👈 ADD THIS
};

module.exports = {
  createFeedback,
  getAllFeedback
};
