const express = require('express');

const router = express.Router();

const admin = require('../../../controllers/admin');
const {
  adminAvailablity,
  validateEmail,
} = require('../../../validations/middlewares/adminSignup');

const validation = require('../../../validations/schemas/admin');
const {
  validationError,
} = require('../../../validations/schemas/validationError');
const validate = [...validation, validationError];

router.get('/loggout', admin.logout);

router.post(
  '/signUp',

  validate,
  adminAvailablity,
  admin.signUp,
);

router.post('/login', validateEmail, admin.login);

router.get('/', admin.loadAdmins);

router.get('/:id', admin.loadSingleAdmin);

router.patch('/:id', admin.updateAdmin);

router.delete('/:id', admin.removeAdmin);

module.exports = router;
