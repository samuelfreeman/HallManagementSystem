const express = require("express");

const router = express.Router();

const room = require("../../../controllers/room");

router.get("/available", room.getAvailableRooms);

module.exports = router;
