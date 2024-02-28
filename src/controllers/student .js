///registering a new student in the hall assuming the have paid their fees
const prisma = require("../utils/prismaUtil");
const {
  saveStudent,
  loadStudents,
  loadStudent,
  loadStudentOption,
  removeStudent,
  updateStudent,
} = require("../helpers/student");
exports.registerStudent = async (req, res, next) => {
  try {
    //checking student availability in the system before trying to register a student
    const data = req.body;
    const option = {
      email: data.email,
    };
    console.log(option);
    res.status(200).json({
      data,
    });
    // const student = await loadStudentOption();
  } catch (error) {
    next(error);
  }
};
