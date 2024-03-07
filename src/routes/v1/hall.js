const express = require("express");

const router = express.Router();

const hall = require("../../controllers/hall");

router.post("/", hall.saveHall);

module.exports = router;
