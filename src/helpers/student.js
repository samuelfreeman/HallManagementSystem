const prisma = require("../utils/prismaUtil");

const saveStudent = async (data) => {
  const student = await prisma.student.create({
    data,
  });
  return student;
};

const loadStudents = async () => {
  const student = await prisma.student.findMany({});
  return student;
};

const loadStudent = async (studentId) => {
  const student = await prisma.student.findUnique({
    where: {
      studentId,
    },
  });
  return student;
};

const removeStudent = async (studentId) => {
  const student = await prisma.student.delete({
    where: {
      studentId,
    },
  });
  return student;
};

const updateStudent = async (studentId, data) => {
  const student = await prisma.student.update({
    where: {
      studentId,
    },
    data,
  });
  return student;
};

module.exports = {
  saveStudent,
  loadStudents,
  loadStudent,
  removeStudent,
  updateStudent,
};
