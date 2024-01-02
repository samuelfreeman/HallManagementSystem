/// Importing express package and other middlewares
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8080;

const app = express(); /// Involking express to the variable app to speed up out serve

const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyparser = require('body-parser');

app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(compression());
const routerBlock = require('./routes/blocks');
// middleware for body parser
app.use(bodyparser.json());
app.use('/api', routerBlock);
app.listen(PORT, () => {
  console.log('Server running on port', `${PORT}`);
});
