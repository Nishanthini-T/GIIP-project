const Dataset = require("../models/Dataset");
const { parseCsvFile } = require("./csvService");

const createDataset = async ({ body, file, userId }) => {
  if (!file) {
    const error = new Error("CSV file is required");
    error.statusCode = 400;
    throw error;
  }

  const csvData = await parseCsvFile(file.path);

  const dataset = await Dataset.create({
    name: body.name,
    description: body.description || "",
    originalFileName: file.originalname,
    storedFileName: file.filename,
    filePath: file.path,
    rowCount: csvData.rowCount,
    columns: csvData.columns,
    uploadedBy: userId
  });

  return {
    dataset,
    preview: csvData.preview
  };
};

const getDatasetSummary = async () => {
  return Dataset.find()
    .populate("uploadedBy", "name email")
    .sort({ createdAt: -1 });
};

module.exports = {
  createDataset,
  getDatasetSummary
};
