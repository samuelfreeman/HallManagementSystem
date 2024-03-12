const logger = require("../utils/loggerUtil");
const prisma = require("../utils/prismaUtil");

exports.requestRoom = async (req, res, next) => {
  try {
    const data = req.body;
    data.status = "Pending";

    const roomRequest = await prisma.roomRequest.create({
      data,
    });
    res.status(200).json({
      roomRequest,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getRequests = async (req, res, next) => {
  try {
    const requests = await prisma.roomRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      requests,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

// get all request by status
exports.getRequestsByStatus = async (req, res, next) => {
  try {
    const status = req.params;

    const requests = await prisma.roomRequest.findMany({
      where: {
        status,
      },
    });
    res.status(200).json({
      requests,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAnalytics = async (req, res, next) => {
  try {
    const requests = await prisma.roomRequest.groupBy({
      by: ["status"],
      _count: true,
    });
    res.status(200).json({
      requests,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.updateRoomrequest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const requests = await prisma.roomRequest.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({
      requests,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.getRequest_by_studentId = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const request = await prisma.roomRequest.findFirst({
      where: {
        StudentId: studentId,
      },
      include: {
        student: true,
      },
    });
    res.status(200).json({
      request
    })
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.deleteRoomRequest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const request = await prisma.roomRequest.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      request,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
