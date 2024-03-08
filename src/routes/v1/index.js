const { Router } = require("express");

const route = Router();

// import our routes here
const adminRoute = require("./admin");
const student = require("./student");
const hall = require("./hall");
const allocation = require("./allocation");
const department = require("./department");
const room = require("./rooms");
/// using our route middleware
route.use("/admin", adminRoute);
route.use("/hall", hall);
route.use("/student", student);
route.use("/allocation", allocation);
route.use("/department", department);
route.use("/room", room);

module.exports = route;
