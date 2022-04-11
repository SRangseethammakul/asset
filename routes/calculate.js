const express = require("express");
const router = express.Router();
const calculateController = require("../controllers/calculateController");

router.post("/calculateperprice", calculateController.index);
router.post("/calculatepersize", calculateController.calculatePerSize);
router.post("/calculatepervaa", calculateController.calculatePerVaa);

module.exports = router;
