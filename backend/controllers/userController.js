const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    message: "Users fetched successfully",
    count: users.length,
    users
  });
});

module.exports = {
  getProfile,
  getAllUsers
};