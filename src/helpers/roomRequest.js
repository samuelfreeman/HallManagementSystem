const prisma = require('../utils/prismaUtil');

const saveRequest = async (data) => {
  const roomRequest = await prisma.roomRequest.create({
    data,
  });
  return roomRequest;
};

const loadRequests = async () => {
  const requests = await prisma.roomRequest.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return requests;
};

const loadRequestsByStatus = async (status) => {
  const requests = await prisma.roomRequest.findMany({
    where: {
      status,
    },
  });
  return requests;
};

const loadAnalytics = async () => {
  const requests = await prisma.roomRequest.groupBy({
    by: ['status'],
    _count: true,
  });
  return requests;
};

const editRequest = async (id, data) => {
  const requests = await prisma.roomRequest.update({
    where: {
      id,
    },
    data,
  });
  return requests;
};

const loadRequestStudentById = async (studentId) => {
  const request = await prisma.roomRequest.findFirst({
    where: {
      StudentId: studentId,
    },
    include: {
      student: true,
    },
  });
  return request;
};

const deleteRequest = async () => {
  const request = await prisma.roomRequest.delete({
    where: {
      id,
    },
  });
  return request;
};

module.exports = {
  saveRequest,
  loadRequests,
  loadRequestsByStatus,
  loadAnalytics,
  editRequest,
  loadRequestStudentById,
  deleteRequest,
};
