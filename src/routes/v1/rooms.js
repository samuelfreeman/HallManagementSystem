const express = require("express");

const router = express.Router();

const room = require("../../controllers/room");

router.post("/", room.saveRooms);
router.get("/", room.getAllRooms);
router.get("/available", room.getAvailableRooms);
router.get("/analysis", room.noOfRoomsByStatus);
router.get("/:status", room.getRoomsByStatus);
router.patch("/:id", room.updateRoom);
router.post("/single", room.saveRoom);
router.delete("/:id", room.deleteRoom);
router.get("/:id", room.getSingleRoom);
module.exports = router;
