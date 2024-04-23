/// registering a new student in the hall assuming the have paid their fees
const bcrypt = require('../utils/bcrypt');
const logger = require('../utils/loggerUtil');
const prisma = require('../utils/prismaUtil');
const CustomError = require('../utils/customErrorClass');
const cloudinary = require('../utils/cloudinary');
const {
  saveStudent,
  loadStudents,
  loadStudent,
  removeStudent,
  updateStudent,
} = require('../helpers/student');

exports.registerStudent = async (req, res, next) => {
  try {
    // checking student availability in the system before trying to register a student
    const data = req.body;
    console.log('This is the data', data);
    data.level = parseInt(data.level);
    const photo = req.file ? req.file.path : undefined;
    if (photo) {
      const uploaded = await cloudinary.uploader.upload(photo, {
        folder: 'student/pictures',
      });
      if (uploaded) {
        data.profile = uploaded.secure_url;
      }
    }
    data.password = await bcrypt.hash(data.password);
    const student = await saveStudent(data);
    res.status(200).json({
      student,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
/*
It depends on the Hall or School what they 
will use as their main identification but 
in this case i will use the telephone and password
*/
exports.login = async (req, res, next) => {
  try {
    const data = req.body;
    const telephone = data.telephone;
    const find_student = await prisma.student.findUnique({
      where: {
        telephone,
      },
    });
    if (!find_student) {
      throw new CustomError(400, 'Student not Found');
    } else {
      const checkPassword = await bcrypt.compare(
        data.password,
        find_student.password,
      );
      if (!checkPassword) {
        throw new CustomError(400, 'Invalid Credentials');
      } else {
        delete find_student.password;
        return res.status(200).json({
          message: 'User successfully logged in !',
          student: find_student,
        });
      }
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAllstudents = async (req, res, next) => {
  try {
    const students = await loadStudents();
    res.status(200).json({
      students,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getSingleStudent = async (req, res, next) => {
  try {
    const student = await loadStudent();
    res.status(200).json({
      student,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await removeStudent(id);
    res.status(200).json({
      student,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.editStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const student = await updateStudent(id, data);
    res.status(200).json({
      student,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
// find a student hall allocation
exports.findStudentsAllocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findFirst({
      where: {
        studentId: id,
      },
      include: {
        hall: {
          include: {
            rooms: true,
          },
        },
      },
    });
    res.status(200).json({
      student,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
