const bcrypt = require("../utils/bcrypt");
const logger = require("../utils/loggerUtil");
const { signToken, setInvalidToken } = require("../utils/tokenUtil");
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
    const token = signToken({ id: admin.id });
    delete admin.password;
    res
      .status(200)
      .json({ message: "admin Registered", admin, acessToken: token });
  } catch (error) {
    logger.error(error);
    next();
  }
};

const login = async (req, res, next) => {
  try {
    const { password } = req.body;
    const systemPassword = req.person.password;
    const checkPassword = await bcrypt.compare(password, systemPassword);
    if (!checkPassword) {
      throw new Error("Invalid credentials");
    } else {
      res.status(200).json({
        message: "User succesfully logged in !",
        id: req.person.id,
      });
    }
  } catch (error) {
    next(error);
    logger.error(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const loggedout = "loggedout";
    const token = setInvalidToken({ loggedout });
    res.status(200).json({
      message: "User succesfully logged out",
      token,
    });
  } catch (error) {
    next(error);
    logger.error(error);
  }
};

const loadAdmins = async (req, res, next) => {
  try {
    const admin = await getAdmins();
    res.status(200).json({ status: "successfull", admin });
  } catch (error) {
    next(error);
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
    next(error);
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
    next(error);
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
  logout
};
