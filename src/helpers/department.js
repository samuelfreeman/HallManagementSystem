const prisma = require("../utils/prismaUtil");

const saveDepartment = async (data) => {
  const department = await prisma.department.create({
    data,
  });
  return department;
};
const getDepartment = async (id) => {
  const department = await prisma.department.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          student: true,
        },
      },
      student: true,
    },
  });
  return department;
};
const getDepartments = async () => {
  const departments = await prisma.department.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          student: true,
        },
      },
      student: true,
    },
  });
  return departments;
};

const editDepartments = async (id, data) => {
  const department = await prisma.department.update({
    where: { id },
    data,
  });
  return department;
};

const removeDepartments = async (id) => {
  const department = await prisma.department.delete({
    where: {
      id,
    },
  });
  return department;
};
module.exports = {
  saveDepartment,
  getDepartment,
  getDepartments,
  editDepartments,
  removeDepartments,
};
