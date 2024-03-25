const prisma = require('../utils/prismaUtil');

const addAllocation = async (data) => {
  const allocation = await prisma.allocation.create({
    data,
  });
  return data;
};
const allocateById = async (id) => {
  const allocation = await prisma.allocation.findUnique({
    where: {
      id,
    },
  });
  return allocation;
};

const editAllocation = async (id, data) => {
  const allocation = await prisma.allocation.update({
    where: {
      id,
    },
    data,
  });
  return allocation;
};

const loadAllocations = async () => {
  const allocations = await prisma.allocation.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allocations;
};

const loadAnalytics = async () => {
  const allocation = await prisma.allocation.groupBy({
    by: ['roomsId', 'studentId'],
    _count: true,
  });
  return allocation;
};

const removeAllocation = async (id) => {
  const allocation = await prisma.allocation.delete({
    where: {
      id,
    },
  });
  return allocation;
};

module.exports = {
  addAllocation,
  allocateById,
  editAllocation,
  loadAllocations,
  loadAnalytics,
  removeAllocation,
};
