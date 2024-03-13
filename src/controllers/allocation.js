const logger = require('../utils/loggerUtil')
const prisma = require('../utils/prismaUtil')
/*
To do:
1. Error handeler to check for allocating a student to  an Occupied  room
2. Error handeler to make sure student hasnt already been already allocated to a room
3. Endpoint to update allocation information which is like to change a student ,or to remove a student from a room

*/

exports.saveAllocation = async (req, res, next) => {
  try {
    const data = req.body
    const allocation = await prisma.allocation.create({
      data,
    })
    res.status(200).json({
      allocationDetails: allocation,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.findAllocationById = async (req, res, next) => {
  try {
    const { id } = req.params
    const allocation = await prisma.allocation.findUnique({
      where: {
        id,
      },
    })
    res.status(200).json({
      allocationDetails: allocation,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.updateAllocation = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const allocation = await prisma.allocation.update({
      where: {
        id,
      },
      data,
    })
    res.status(200).json({
      allocation,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.getAllAlacocation = async (req, res, next) => {
  try {
    const allocations = await prisma.allocation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    res.status(200).json({
      allocations,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.getAnalytics = async (req, res, next) => {
  try {
    const allocation = await prisma.allocation.groupBy({
      by: ['roomsId', 'studentId'],
      _count: true,
    })
    res.status(200).json({
      allocation,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.deleteAllocation = async (req, res, next) => {
  try {
    const { id } = req.params
    const allocation = await prisma.allocation.delete({
      where: {
        id,
      },
    })
    res.status(200).json({
      allocation,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
