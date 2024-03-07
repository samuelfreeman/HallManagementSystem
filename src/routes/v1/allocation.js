const express = require("express");

const router = express.Router();

const allocation = require("../../controllers/allocation");

router.post("/", allocation.allocation);

module.exports = router;
