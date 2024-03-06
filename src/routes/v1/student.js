const express = require("express");

const Router = express.Router();
const student = require("../../controllers/student ");

Router.post("/", student.registerStudent);
Router.get("/:id", student.findStudentsAllocation);
module.exports = Router;
