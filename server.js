const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const routerBlock = require("./Route/blocks");
//middleware for body parser
app.use(bodyparser.json());
app.use("/api", routerBlock);
app.listen(PORT, () => {
  console.log("Server is running!");
});
