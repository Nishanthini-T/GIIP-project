const asyncHandler = require("../middleware/asyncHandler");
const { getCountries } = require("../services/countryService");

const listCountries = asyncHandler(async (req, res) => {
  const countries = await getCountries();
  res.status(200).json({ countries });
});

module.exports = {
  listCountries
};
