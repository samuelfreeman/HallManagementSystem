const prisma = require("../../utils/prismaUtil");
const logger = require("../../utils/loggerUtil");
const customError = require("../../utils/customErrorClass");
const adminAvailablity = async (req, res, next) => {
  const { email } = req.body;
  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });
  if (admin) {
    res.status(400).json({ message: "Admin already exists!" });
  } else {
    next();
  }
};

const validateEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    if (!admin) {
      //  so i think this is how to use chips error class handler
      //  but this is my own so yeah 👍
      throw new customError(404, "Email not found!");
    } else {
      next();
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

module.exports = {
  adminAvailablity,
  validateEmail,
};
