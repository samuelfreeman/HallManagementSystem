const prisma = require('../utils/prismaUtil');

const addAdmin = async (data) => {
  const admin = await prisma.admin.create({
    data,
  });
  return admin;
};

const getSingleAdmin = async (id) => {
  const admin = await prisma.admin.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return admin;
};

const getAdmins = async () => {
  const admin = await prisma.admin.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return admin;
};

const editAdmin = async (id, data) => {
  const admin = await prisma.admin.update({
    where: {
      id,
    },
    data,
  });
  return admin;
};

const deleteAdmin = async (id) => {
  const admin = await prisma.admin.delete({
    where: {
      id,
    },
  });
  return admin;
};

module.exports = {
  addAdmin,
  getSingleAdmin,
  getAdmins,
  editAdmin,
  deleteAdmin,
};
