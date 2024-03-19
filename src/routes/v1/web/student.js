const express = require('express');

const Router = express.Router();

const student = require('../../../controllers/student ');

const multer = require('multer');
const validation = require('../../../validations/schemas/admin');
const {
  validationError,
} = require('../../../validations/schemas/validationError');
const validate = [...validation, validationError];

const upload = multer({ dest: 'uploads/' });

Router.post('/', upload.single('profile'), validate, student.registerStudent);

Router.get('/:id', student.findStudentsAllocation);

Router.get('/', student.getAllstudents);

Router.patch('/:id', student.editStudent);

Router.delete('/:id', student.deleteStudent);

module.exports = Router;
