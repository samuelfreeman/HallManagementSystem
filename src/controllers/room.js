const {
  registerRoom,
  registerRooms,
  getRoom,
  getRooms,
  editRooms,
  removeRoom,
} = require("../helpers/room");

const prisma = require("../utils/prismaUtil");

const logger = require("../utils/loggerUtil");

exports.saveRoom = async (req, res, next) => {
  try {
    const data = req.body;
    data.status = "Vacant";
    const room = await registerRoom(data);
    res.status(201).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.saveRooms = async (req, res, next) => {
  try {
    const data = req.body;
    const room = await registerRooms(data);
    res.status(200).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getSingleRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await getRoom(id);
    res.status(200).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAllRooms = async (req, res, next) => {
  try {
    const rooms = await getRooms();
    res.status(200).json({
      rooms,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.noOfRoomsByStatus = async (req, res, next) => {
  try {
    const roomsGroupedByStatus = await prisma.rooms.groupBy({
      by: ["status", "blockName"],
      _count: true,
    });
    res.status(200).json({
      roomsGroupedByStatus,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAvailableRooms = async (req, res, next) => {
  try {
    const room = await prisma.rooms.findMany({
      where: {
        status: {
          in: ["Vacant", "Partially_Occupied"],
        },
      },
      include: {
        _count: {
          select: {
            allocation: true,
          },
        },
      },
    });
    res.status(200).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getRoomsByStatus = async (req, res, next) => {
  try {
    const { status } = req.params;
    const validStatus = ["Vacant", "Partially_Occupied", "Occupied"];
    if (!validStatus.includes(status)) {
      throw new Error("Please Enter the right option");
    } else {
      const rooms = await prisma.rooms.findMany({
        where: { status },
      });
      res.status(200).json({
        rooms,
      });
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const room = await editRooms(id, data);
    res.status(200).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await removeRoom(id);
    res.status(200).json({
      room,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
