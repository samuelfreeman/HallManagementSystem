const logger = require('../utils/loggerUtil');

const {
  saveRequest,
  loadRequests,
  loadRequestsByStatus,
  loadAnalytics,
  editRequest,
  loadRequestStudentById,
  deleteRequest,
} = require('../helpers/roomrequest');

exports.requestRoom = async (req, res, next) => {
  try {
    const data = req.body;
    data.status = 'Pending';
    const roomRequest = await saveRequest(data);
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
    const requests = await loadRequests();
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
    const requests = await loadRequestsByStatus(status);
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
    const requests = await loadAnalytics();
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
    const request = await editRequest(id, data);
    res.status(200).json({
      request,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
exports.getRequest_by_studentId = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const request = await loadRequestStudentById(studentId);
    res.status(200).json({
      request,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.deleteRoomRequest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const request = await deleteRequest(id);
    res.status(200).json({
      request,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
