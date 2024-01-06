const { Router } = require("express");
const mainRouter = Router();
const indexRouter = require("../routes/v1/index");
mainRouter.use("/v1", indexRouter);
module.exports = mainRouter;
