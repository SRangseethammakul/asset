const express = require("express");
const router = express.Router();
const calculateController = require("../controllers/calculateController");

router.post("/", calculateController.index);

module.exports = router;
