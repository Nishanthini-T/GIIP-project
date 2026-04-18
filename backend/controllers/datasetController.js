const asyncHandler = require("../middleware/asyncHandler");
const { createDataset, getDatasetSummary } = require("../services/datasetService");

const uploadDataset = asyncHandler(async (req, res) => {
  const result = await createDataset({
    body: req.body,
    file: req.file,
    userId: req.user._id
  });

  res.status(201).json({
    message: "Dataset uploaded successfully",
    dataset: result.dataset,
    preview: result.preview
  });
});

const getDatasets = asyncHandler(async (req, res) => {
  const datasets = await getDatasetSummary();
  res.status(200).json({ datasets });
});

module.exports = {
  uploadDataset,
  getDatasets
};
