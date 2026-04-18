const validateRequired = (fields) => (req, res, next) => {
  const missingFields = fields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Missing required fields: ${missingFields.join(", ")}`
    });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      message: "Valid email is required"
    });
  }

  next();
};

module.exports = {
  validateRequired,
  validateEmail
};
