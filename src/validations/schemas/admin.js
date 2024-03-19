const { body } = require('express-validator');

const validate = [
  body('email').trim().isEmail().withMessage('Please enter an email.'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .isStrongPassword()
    .withMessage('Please enter a strong password'),
  body('telephone')
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage('the minimum should be 10 digits')
    .isMobilePhone('en-GH', { strictMode: true })
    .withMessage('It is not a phone number'),
  body('fullname')
    .trim()
    .isString()
    .withMessage('Your fullname must be a string'),
];

module.exports = validate;
