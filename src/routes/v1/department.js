const express = require("express");

const router = express.Router();

const department = require("../../controllers/department");

router.post("/", department.saveDepartment);

module.exports = router;
