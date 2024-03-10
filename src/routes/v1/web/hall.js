const express = require("express");

const router = express.Router();

const hall = require("../../../controllers/hall");

router.post("/", hall.saveHall);

router.get("/", hall.getAllHalls);

router.get("/:id", hall.getSingleHall);

router.patch("/:id", hall.updateHall);

router.delete("/:id", hall.deleteHall);

module.exports = router;
