const prisma = require("../utils/prismaUtil");
const bcrypt = require("../utils/bcrypt");
const logger = require("../utils/loggerUtil");
const {
  addAdmin,
  getSingleAdmin,
  getAdmins,
  editAdmin,
  deleteAdmin,
} = require("../helpers/admin");

const signUp = async (req, res, next) => {
  try {
    const data = req.body;
    data.password = await bcrypt.hash(data.password);
    console.log(data.password);
    const admin = await addAdmin(data);
    delete admin.password;
    res.status(200).json({ message: "admin Registered", admin });
  } catch (error) {
    console.log(error);
    logger.error(error);
    next();
  }
};
// To  make the code cleaner i can write a  middleware to check for the user email
//  or write  a helper function to  check for the user email  but im feeling lazy so i will write it inside the controller

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    if (!checkEmail) {
      throw new Error("Email not found!");
    } else {
      const checkPassword = await bcrypt.compare(password, checkEmail.password);
      if (!checkPassword) {
        throw new Error("Invalid credentials");
      } else {
        delete checkEmail.password;
        res.status(200).json({
          message: "User succesfully logged in !",
          user: checkEmail.id,
        });
      }
    }
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};

const loadAdmins = async (req, res, next) => {
  try {
    const admin = await getAdmins();
    res.status(200).json({ status: "successfull", admin });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};

const loadSingleAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = await getSingleAdmin(id);
    res.status(200).json({
      admin,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};
const updateAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const admin = await editAdmin(id, data);
    res.status(200).json({
      admin,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};
const removeAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;

    const admin = await deleteAdmin(id);
    res.status(200).json({
      admin,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
    next(error);
  }
};

module.exports = {
  signUp,
  loadAdmins,
  login,
  loadSingleAdmin,
  updateAdmin,
  removeAdmin,
};
