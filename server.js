/// Importing express package and other middlewares
const express = require('express')

const app = express(); /// Involking express to the variable app to speed up out serve
const dotenv = require("dotenv");
const morgan = require("morgan");

const morgan = require("morgan");


dotenv.config()
const PORT = process.env.PORT || 8080

// const { generateKey } = require("node:crypto");

// const code = generateKey("hmac", { length: 400 }, (err, key) => {
//   if (err) throw err;
//   console.log(key.export().toString("hex")); // 46e..........620
// });

const helmet = require("helmet");
const morgan = require('morgan')
const cors = require("cors");
const compression = require("compression");
const bodyparser = require("body-parser");
const indexRoute = require("./src/routes/index");


app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(compression());

app.use(morgan('dev'))



// middleware for body parser
app.use(bodyparser.json())
// run admin
run()
app.use('/api', indexRoute)

// always make sure to put error middleware right after the route handler
// or else it will throw and html ... trust me 😉

app.get('/test-error', (req, res) => {
  console.log(req.baseUrl)
  throw new Error('This is an Error')
})

app.use((err, req, res, next) => {
  // console.error(err.stack); // Log the error stack trace
  res.status(err.status || 500).json({
    status: err.status || 500,
    error: err.message,
  })
})

app.listen(PORT, () => {
  console.log('Server running on port', `${PORT}`)
})
