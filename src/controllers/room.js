/* 
To do:
1. Endpoint to get rooms based on  status : Occupied, Vacant, Partially_Occupied
2. Error handler to check for double registeration of room
*/

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
     data.status ="Vacant"
    const room = await registerRoom(data);
    res.status(200).json({
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
