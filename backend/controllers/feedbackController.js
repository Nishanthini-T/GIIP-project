const asyncHandler = require("../middleware/asyncHandler");
const { createFeedback, getAllFeedback } = require("../services/feedbackService");

const addFeedback = asyncHandler(async (req, res) => {
  const feedback = await createFeedback({
    message: req.body.message,
    category: req.body.category,
    userId: req.user._id
  });

  res.status(201).json({
    message: "Feedback created successfully",
    feedback
  });
});

const getFeedback = asyncHandler(async (req, res) => {
  const feedbacks = await getAllFeedback();
  res.status(200).json({ feedbacks });
});

module.exports = {
  addFeedback,
  getFeedback
};
