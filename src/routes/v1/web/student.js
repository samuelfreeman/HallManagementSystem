const express = require("express");

const Router = express.Router();
const student = require("../../../controllers/student ");

Router.post("/", student.registerStudent);

Router.get("/:id", student.findStudentsAllocation);

Router.get("/", student.getAllstudents);

Router.patch("/:id", student.editStudent);

Router.delete("/:id", student.deleteStudent);

module.exports = Router;
