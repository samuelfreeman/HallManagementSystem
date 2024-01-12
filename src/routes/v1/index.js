const { Router } = require('express');

const route = Router();

// import our routes here
const blocksRoute = require('./blocks')
const adminRoute = require('./admin')
///using our route middleware
route.use('/blocks',blocksRoute);
route.use('/admin', adminRoute)
module.exports = route;
