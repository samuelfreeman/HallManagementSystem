const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyparser = require('body-parser');
require('dotenv').config();

app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(compression());
const routerBlock = require('./Route/blocks');
// middleware for body parser
app.use(bodyparser.json());
app.use('/api', routerBlock);
app.listen(PORT, () => {
  console.log('Server is running!');
});
