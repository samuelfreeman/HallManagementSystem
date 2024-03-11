const e = require("express");
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


