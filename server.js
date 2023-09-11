const express = require("express");
const app = express();
const PORT = 7070;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyparser = require("body-parser");
const routerBlock = require("./Route/blocks");
//middleware for body parser
app.use(bodyparser.json());
app.use("/api", routerBlock);
app.listen(PORT, () => {
  console.log("Server is running!");
});
