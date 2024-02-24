const express = require("express");

const router = express.Router();

const admin = require("../../controllers/admin");
const {
  adminAvailablity,
} = require("../../validations/middlewares/adminSignup");


router.post("/signUp", adminAvailablity, admin.signUp);
router.post("/login", admin.login);
router.get("/", admin.loadAdmins);
router.get("/:id", admin.loadSingleAdmin);
router.patch("/:id", admin.updateAdmin);
router.delete("/:id", admin.removeAdmin);

module.exports = router;

