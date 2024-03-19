const { body } = require('express-validator');
const validate = [
  body('profile').notEmpty().withMessage('Please include your photo'),
  body('fullname')
    .notEmpty()
    .withMessage('Please provide your fullname')
    .trim(),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please make sure your input is an email'),
  body('passsword')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Please your password must be at least 8 characters long')
    .isStrongPassword()
    .withMessage(
      'Please  your password must be Strong : It must contain an Uppercase letter , a Lowercase letter ,a number and a symbol',
    ),
  body('telephone')
    .trim()
    .isLength({ max: 14, min: 10 })
    .withMessage('please you have exceeded or is below the limit')
    .isMobilePhone('en-GH', { strictMode: true })
    .withMessage(
      'Please make sure the value you have entered is a mobile number',
    ),
];

module.exports = validate;
