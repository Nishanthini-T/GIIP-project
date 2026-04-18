const express = require("express");
const { listCountries } = require("../controllers/countryController");

const router = express.Router();

router.get("/", listCountries);

module.exports = router;
