const express = require('express');

const router = express.Router();
const admin = require('../../controllers/admin');
const {adminAvailablity} = require("../../validations/middlewares/adminSignup")


router.post('/signUp', adminAvailablity, admin.addAdmin);
router.get('/',admin.getAdmins)

module.exports = router;