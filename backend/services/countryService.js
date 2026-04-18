const Country = require("../models/Country");

const defaultCountries = [
  { name: "India", code: "IN", region: "Asia", population: 1428000000 },
  { name: "United States", code: "US", region: "North America", population: 339000000 },
  { name: "Germany", code: "DE", region: "Europe", population: 84000000 },
  { name: "Japan", code: "JP", region: "Asia", population: 124000000 }
];

const ensureCountries = async () => {
  const count = await Country.countDocuments();

  if (count === 0) {
    await Country.insertMany(defaultCountries);
  }
};

const getCountries = async () => {
  await ensureCountries();
  return Country.find().sort({ name: 1 });
};

module.exports = {
  getCountries
};
