const prisma = require('../../utils/prismaUtil')
const logger = require('../../utils/loggerUtil')
const CustomError = require('../../utils/customErrorClass')

const adminAvailablity = async (req, res, next) => {
  const { email } = req.body
  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  })
  if (admin) {
    res.status(400).json({ message: 'Admin already exists!' })
  } else {
    next()
  }
}

const validateEmail = async (req, res, next) => {
  try {
    const { email } = req.body
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    })
    if (!admin) {
      throw new CustomError(404, 'Email not found!')
    } else {
      req.person = {
        id: admin.id,
        password: admin.password,
      }
      next()
    }
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

module.exports = {
  adminAvailablity,
  validateEmail,
}
