/// Importing express package and other middlewares
const express = require('express');

const app = express(); /// Involking express to the variable app to speed up out serve
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8080;

const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyparser = require('body-parser');
const { run } = require('./src/utils/setuputil');

const indexRoute = require('./src/routes/index');


app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(compression());
app.use(morgan('dev'))

// middleware for body parser
app.use(bodyparser.json());
// run admin
run();
app.use('/api', indexRoute);

// always make sure to put error middleware right after the route handler
// or else it will throw and html ... trust me 😉

app.use((err, req, res, next) => {
  // console.error(err.stack); // Log the error stack trace
  res.status(err.status || 500).json({
    status: err.status || 500,
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log('Server running on port', `${PORT}`);
});
