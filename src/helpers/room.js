const prisma = require("../utils/prismaUtil");

const registerRoom = async (data) => {
  const room = await prisma.rooms.create({
    data,
  });
  return room;
};
const registerRooms = async (data) => {
  const room = await prisma.rooms.createMany({
    data,
  });
  return room;
};
const getRoom = async (id) => {
  const room = await prisma.rooms.findUnique({
    where: {
      id,
    },
  });
  return room;
};

const getRooms = async () => {
  const rooms = await prisma.rooms.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return rooms;
};
const editRooms = async (id, data) => {
  const room = await prisma.rooms.update({
    where: {
      id,
    },
    data,
  });
  return room;
};

const removeRoom = async (id) => {
  const room = await prisma.rooms.delete({
    where: {
      id,
    },
  });
  return room;
};

module.exports = {
  registerRoom,
  registerRooms,
  getRoom,
  getRooms,
  editRooms,
  removeRoom,
};
