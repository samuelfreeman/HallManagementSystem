const express = require('express');

const router = express.Router();
const admin = require('../../controllers/admin');
const {adminAvailablity} = require("../../validations/middlewares/adminSignup")
const {login} = require('../../validations/middlewares/adminLogin')


router.post('/signUp', adminAvailablity, admin.addAdmin);
router.post('/login', login,)
router.get('/',admin.getAdmins)

module.exports = router;