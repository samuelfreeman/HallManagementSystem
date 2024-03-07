const express = require("express");

const router = express.Router();

const room = require("../../controllers/room");

router.post("/", room.saveRooms);
router.get("/", room.getAllRooms);
router.get("/available", room.getAvailableRooms);
module.exports = router;
