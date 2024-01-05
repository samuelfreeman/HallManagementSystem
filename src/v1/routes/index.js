const { Router } = require('express');

const route = Router();

// import our routes here
const blocksRoute = require('./blocks')

///using our route middleware
route.use('/',blocksRoute);
module.exports = route;
