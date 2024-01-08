/// Importing express package and other middlewares
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express(); /// Involking express to the variable app to speed up out serve

const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const bodyparser = require("body-parser");
const indexRoute = require("./src/routes/index");

app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(compression());

app.use((err, req, res) => { // if person hits a wrong endpoint 
  res.status(404).json({
    error: err,
    Status: "Route not found",
  });
});


// middleware for body parser
app.use(bodyparser.json());
app.use("/api", indexRoute);
app.listen(PORT, () => {
  console.log("Server running on port", `${PORT}`);
});
