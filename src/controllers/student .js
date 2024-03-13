/// registering a new student in the hall assuming the have paid their fees
const logger = require('../utils/loggerUtil')
const prisma = require('../utils/prismaUtil')

const {
  saveStudent,
  loadStudents,
  loadStudent,
  removeStudent,
  updateStudent,
} = require('../helpers/student')

exports.registerStudent = async (req, res, next) => {
  try {
    // checking student availability in the system before trying to register a student
    const data = req.body
    const student = await saveStudent(data)
    res.status(200).json({
      student,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
exports.getAllstudents = async (req, res, next) => {
  try {
    const students = await loadStudents()
    res.status(200).json({
      students,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.getSingleStudent = async (req, res, next) => {
  try {
    const student = await loadStudent()
    res.status(200).json({
      student,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const student = await removeStudent(id)
    res.status(200).json({
      student,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
exports.editStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const student = await updateStudent(id, data)
    res.status(200).json({
      student,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
// find a student hall allocation
exports.findStudentsAllocation = async (req, res, next) => {
  try {
    const { id } = req.params
    const student = await prisma.student.findFirst({
      where: {
        studentId: id,
      },
      include: {
        department: true,
        hall: {
          include: {
            rooms: true,
          },
        },
      },
    })
    res.status(200).json({
      student,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
