const {
  registerRoom,
  registerRooms,
  getRoom,
  getRooms,
  editRooms,
  removeRoom,
} = require("../helpers/room");

const logger = require("../utils/loggerUtil");

exports.saveRoom = async (req, res, next) => {
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
exports.saveRooms = async (req, res, next) => {
  try {
    const data = req.body;
    const room = await registerRoom(data);
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
