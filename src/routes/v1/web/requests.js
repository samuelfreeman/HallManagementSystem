const express = require("express");
const router = express.Router();
const requests = require("../../../controllers/roomRequest");

router.get("/", requests.getRequests);
router.get("/analytics", requests.getAnalytics);
router.get("/:status", requests.getRequestsByStatus);
router.patch("/:id", requests.updateRoomrequest);
router.delete("/:id", requests.deleteRoomRequest);
module.exports = router;
