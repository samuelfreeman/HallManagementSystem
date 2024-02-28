const { Router } = require("express");

const route = Router();

// import our routes here
const blocksRoute = require("./blocks");
const adminRoute = require("./admin");
const student = require("./student");
///using our route middleware
route.use("/blocks", blocksRoute);
route.use("/admin", adminRoute);
route.use("/student", student);
module.exports = route;
