const prisma = require('../utils/prismaUtil');

const registerHall = async (data) => {
  const hall = await prisma.hall.create({
    data,
  });
  return hall;
};

const getHall = async (id) => {
  const hall = await prisma.hall.findUnique({
    where: {
      id,
    },
  });
  return hall;
};
const getHalls = async () => {
  const hall = await prisma.hall.findMany({
    orderBy: {
      name: 'desc',
    },
  });
  return hall;
};

const editHall = async (id, data) => {
  const hall = await prisma.hall.findMany({
    where: {
      id,
    },
    data,
  });
  return hall;
};

const removeHall = async (id) => {
  const hall = await prisma.hall.delete({
    where: {
      id,
    },
  });
  return hall;
};

module.exports = {
  registerHall,
  getHall,
  getHalls,
  editHall,
  removeHall,
};
