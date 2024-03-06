const {
  saveDepartment,
  getDepartment,
  getDepartments,
  editDepartments,
  removeDepartments,
} = require("../helpers/department");
const logger = require('../utils/loggerUtil');

exports.saveDepartment = async (req, res, next) => {
    try {
      const data = req.body;
      const department = await saveDepartment(data);
      res.status(200).json({
        department,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
  
  exports.getSingleDepartment = async (req, res, next) => {
    try {
      const { id } = req.params;
      const department = await getDepartment(id);
      res.status(200).json({
        department,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
  
  exports.getAllDepartment = async (req, res, next) => {
    try {
      const departments = await getDepartments();
      res.status(200).json({
        departments,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
  exports.updateDepartment= async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const department = await editDepartments(id, data);
      res.status(200).json({
        department,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
  
  exports.deleteDepartment = async (req, res, next) => {
    try {
      const { id } = req.params;
      const department = await removeDepartments(id);
      res.status(200).json({
        department,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
  