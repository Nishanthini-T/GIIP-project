const express = require("express");
const { uploadDataset, getDatasets } = require("../controllers/datasetController");
const { authGuard } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/uploadMiddleware");
const { validateRequired } = require("../middleware/validationMiddleware");

const router = express.Router();

router.get("/", authGuard, getDatasets);
router.post("/", authGuard, upload.single("file"), validateRequired(["name"]), uploadDataset);

module.exports = router;
