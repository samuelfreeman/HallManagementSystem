const express = require("express");

const router = express.Router();

const department = require("../../../controllers/department");

router.post("/", department.saveDepartment);

router.get("/:id", department.getSingleDepartment);

router.get("/", department.getAllDepartment);

router.patch("/:id", department.updateDepartment);

router.delete("/:id", department.deleteDepartment);

module.exports = router;
