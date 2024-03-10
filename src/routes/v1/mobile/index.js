const { Router } = require("express");

const route = Router();

// import our routes here

const student = require("./student");
const room = require("./rooms");
route.use("/student", student);
route.use("/room", room);

module.exports = route;
