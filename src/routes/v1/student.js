const express = require("express");
const Router = express.Router();
const student = require("../../controllers/student ");

Router.post("/", student.registerStudent);
module.exports = Router;
