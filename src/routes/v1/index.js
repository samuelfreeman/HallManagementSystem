const { Router } = require('express');

const route = Router();

// import our routes here
const adminRoute = require('./admin');
const student = require('./student');
/// using our route middleware
route.use('/admin', adminRoute);
route.use('/student', student);
module.exports = route;
